import { GraphQLObjectType, GraphQLScalarType } from "graphql";
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
      type: new GraphQLScalarType({
        name: 'Images',
        serialize(value) {
          return value;
        },
        parseValue(value) {
          return value;
        },
        parseLiteral(ast) {
          if (ast.kind === 'StringValue') {
            return ast.value;
          }
          return null;
        },
      }),
    },
    createdAt : {
      type: GraphQLString,
    },
    updatedAt : {
      type: GraphQLString,
    },
  }
}); 