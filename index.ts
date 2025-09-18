import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import {
  GraphQLObjectType,
  GraphQLSchema,
  printSchema,
} from 'graphql';
import { userFields,spacesField,animalsField, billetsField,billetsMutation } from './query';
import { MongooseService } from './services/mongoose/mongoose.service';
import cors from 'cors';
import { buildContext } from './middleware/token';

(async () => {
  const mongoose = await MongooseService.getInstance();  // password = password123
  await mongoose.seedDb();
})();

const rootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...spacesField,
    ...userFields,
    ...animalsField,
    ...billetsField
  }
});

const rootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...billetsMutation
  }
});

export const schema = new GraphQLSchema({ 
  query: rootQuery,
  mutation : rootMutation
});
console.log('Dumping GraphQL schema :\n');
console.log(printSchema(schema));

var app = express();
app.use(express.json());
app.use(cors());
app.use(
  '/graphql',
   graphqlHTTP(async (req) => {
    try {
      // @ts-expect-error
      const context = await buildContext(req);

      return {
        schema,
        context,     
        graphiql: true,
      };
    } catch (err) {
      throw err;
    }
  })
);

app.use('/', (_, res) => {
  res.redirect('/graphql');
});
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');

