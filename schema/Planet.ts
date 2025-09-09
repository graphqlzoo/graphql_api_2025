import { GraphQLEnumType, GraphQLObjectType } from "graphql";
import { GraphQLID, GraphQLString } from "graphql/type/scalars";

const climateEnum = new GraphQLEnumType({
  name: "Climate",
  values: {
    HOT: { value: "Hot" },
    COLD: { value: "Cold" },
    OTHER: { value: "Other" },
    UNKNOWN: { value: "Unknown" }
  }
});

export const planetType = new GraphQLObjectType({
  name: 'Planet',
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
    climate:{
      type: climateEnum,
    }
  }
});