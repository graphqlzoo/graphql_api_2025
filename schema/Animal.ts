import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLEnumType, GraphQLList, GraphQLInputObjectType } from "graphql";
import { speciesType } from "./Species";
import { SpaceAnswerType } from "./Space";


export const animalType = new GraphQLObjectType({
    name: "Animal",
    fields: {
      id: { type: GraphQLID },
      species: { type: speciesType },
      space: { type : SpaceAnswerType},
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      images: { type: new GraphQLList(GraphQLString) },
      bornOn: { type: GraphQLString },
      diedOn: { type: GraphQLString },
      createdAt: { type: GraphQLString },
      updatedAt: { type: GraphQLString },
    }
});

export const IdRequestInputType  = new GraphQLInputObjectType({
  name: "InputIdType",
  fields: {
    id: { type: GraphQLString },
  },
});