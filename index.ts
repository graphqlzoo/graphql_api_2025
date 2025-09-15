import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import {
  GraphQLObjectType,
  GraphQLSchema,
  printSchema,
} from 'graphql';
import { userFields } from './query/user';
import { MongooseService } from './services/mongoose/mongoose.service';
import cors from 'cors';

(async () => {
  await MongooseService.getInstance();  // password = password123
})();

const rootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...userFields,
  }
});

export const schema = new GraphQLSchema({ query: rootQuery });
console.log('Dumping GraphQL schema :\n');
console.log(printSchema(schema));

var app = express();
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    context: null, // Call a middleware to parse token and get user info
    graphiql: true
  })
);
app.use('/', (_, res) => {
  res.redirect('/graphql');
});
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');

