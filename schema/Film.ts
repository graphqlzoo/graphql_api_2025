import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLNonNull } from "graphql";
import { planetType } from "./Planet";

export const filmType = new GraphQLObjectType({
  name: 'Film',
  fields: () => {
    const humanType = require('./Human').humanType;
    return{
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      actors:{
        type: new GraphQLList(new GraphQLNonNull(humanType))
      },
      planets: {
        type: new GraphQLList(planetType),
      }
    }
  }
});