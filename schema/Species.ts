import { GraphQLList, GraphQLObjectType, GraphQLScalarType } from "graphql";
import { GraphQLID, GraphQLString } from "graphql/type/scalars";

export const speciesType = new GraphQLObjectType({
  name: 'Species',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    description : {
      type: GraphQLString,
    },
    images : {
      type : new GraphQLList(GraphQLString),
    },
    createdAt : {
      type: GraphQLString,
    },
    updatedAt : {
      type: GraphQLString,
    },
  }
}); 