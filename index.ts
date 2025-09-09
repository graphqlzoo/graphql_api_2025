import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import {
  GraphQLObjectType,
  GraphQLSchema,
  printSchema,
} from 'graphql';
import { humanFields } from './query/human';
import { wookieesFields } from './query/wookiees';
import { planetFields } from './query/planet';
import { filmFields } from './query/film';

const rootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...wookieesFields,
    ...humanFields,
    ...planetFields,
    ...filmFields,
  }
});

export const schema = new GraphQLSchema({ query: rootQuery });
console.log('Dumping GraphQL schema :\n');
console.log(printSchema(schema));

var app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);
app.use('/', (_, res) => {
  res.redirect('/graphql');
});
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');


