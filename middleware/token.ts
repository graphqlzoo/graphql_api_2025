import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { MongooseService } from '../services';
import express from 'express';
import { parse, DocumentNode, OperationDefinitionNode } from 'graphql';

dotenv.config();
const TOKEN_KEY = process.env.SECRET_KEY as string;

const getFieldNamesFromQuery = (query: string) => {
  const ast: DocumentNode = parse(query);

  const fieldNames: string[] = [];

  for (const definition of ast.definitions) {
    if (definition.kind === 'OperationDefinition') {
      const opDef = definition as OperationDefinitionNode;
      const selections = opDef.selectionSet.selections;

      selections.forEach((selection: any) => {
        if (selection.name && selection.name.value) {
          fieldNames.push(selection.name.value);
        }
      });
    }
  }

  return fieldNames;
};

export const buildContext = async (req: express.Request) => {
  const token = (req.headers['authorization'] as string)?.split(' ')[1];
  const name = getFieldNamesFromQuery(req.body.query)[0];

  if (name === 'connection' || name === 'register') {
    (req as any).user = null;
    return { req };
  }

  if (!token) {
    throw new Error('No token provided');
  }

  try {
    const decoded = jwt.verify(token, TOKEN_KEY) as { id: string };
    const mongoose = await MongooseService.getInstance();
    const user = await mongoose.userService.getUserById(decoded.id);
    if (!user) {
      throw new Error('No token provided');
    }
    (req as any).user = user;
    return { req, user };
  } catch (err) {
    throw err;
  }
};


