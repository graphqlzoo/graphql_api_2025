import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import {
  GraphQLObjectType,
  GraphQLSchema,
  printSchema,
} from 'graphql';
import { userFields } from './query/user';
import { MongooseService } from './services/mongoose/mongoose.service';

const rootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...userFields,
  }
});


(async () => {
  const mongoose = await MongooseService.getInstance();
  mongoose.userService.createUser({
    firstName: 'John',
    lastName: 'Doe',
    login: 'johndoe',
    password: 'password123',
    email: 'a@a.com',
  })
})();
export const schema = new GraphQLSchema({ query: rootQuery });
console.log('Dumping GraphQL schema :\n');
console.log(printSchema(schema));

var app = express();
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


