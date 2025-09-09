import { GraphQLObjectType, GraphQLScalarType } from "graphql";
import { GraphQLID, GraphQLString } from "graphql/type/scalars";

export const spaceshipType = new GraphQLObjectType({
  name: 'Spaceship',
  fields: {
    id: {
      type: GraphQLID,
      resolve: obj => {
        console.log(`Resolver called: Human.id with ${JSON.stringify(obj)}`);
        return obj.id;
      }
    },
    name: {
      type: GraphQLString,
      resolve: obj => { // Not forced since default resolver would work
        console.log(
          `Resolver called: Human.name with ${JSON.stringify(obj)}`
        );
        return obj.name;
      }
    },
  }
});