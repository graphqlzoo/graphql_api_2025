import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLBoolean } from "graphql";

export const wookieeType = new GraphQLObjectType({
  name: 'Wookiee',
  fields: {
    id: {
      type: GraphQLID,
      resolve: obj => {
        console.log(`Resolver called: Wookie.id with ${JSON.stringify(obj)}`);
        return obj.id;
      }
    },
    name: {
      type: GraphQLString,
      resolve: obj => { // Not forced since default resolver would work
        console.log(
          `Resolver called: Wookie.name with ${JSON.stringify(obj)}`
        );
        return obj.name;
      }
    },
    history: {type: GraphQLString}
  }
});