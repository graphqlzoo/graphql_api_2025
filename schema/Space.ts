import { GraphQLEnumType, GraphQLNonNull, GraphQLObjectType } from "graphql";
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

export const spaceType = new GraphQLObjectType({
  name: 'Planet',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
  }
});