import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLEnumType, GraphQLList, GraphQLNonNull } from "graphql";
import { speciesType } from "./Species";

export const animalType = new GraphQLObjectType({
  name: 'Animal',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),},
    space: {
      type: new GraphQLNonNull(speciesType),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  
    description: {
      type: GraphQLString,
    },
    image : {
      type: new GraphQLList(GraphQLString),
    },
    
    species : {
      type: speciesType,
    },
    bornOn: {
      type: GraphQLString,
    },
    createdAt: 
    {
      type: GraphQLString,
    },
    updatedAt: {
      type: GraphQLString,
    },
  }
});

