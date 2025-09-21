import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  },
});

export const ConnectionAnswerType = new GraphQLObjectType({
  name: "ConnectionAnswer",
  fields: {
    token: { type: GraphQLString },
    error: { type: GraphQLString }, // nullable automatically
  },
});

export const ConnectionRequestInputType  = new GraphQLInputObjectType({
  name: "ConnectionRequestInputType",
  fields: {
    login: { type: GraphQLString },
    password: { type: GraphQLString },
  },
});

export const RegisterInputType = new GraphQLInputObjectType({
  name: "RegisterInput",
  fields: {
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    login: { type: GraphQLString },
    password: { type: GraphQLString },
  },
});
