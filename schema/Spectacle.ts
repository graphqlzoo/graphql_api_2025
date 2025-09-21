import { 
  GraphQLObjectType, 
  GraphQLID, 
  GraphQLString, 
  GraphQLList, 
  GraphQLInputObjectType 
} from "graphql";
import { animalType } from "./Animal";

export const SpectacleType = new GraphQLObjectType({
  name: "Spectacle",
  fields: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    startTime: { type: GraphQLString }, 
    endTime: { type: GraphQLString },
    animals: { type: new GraphQLList(animalType) },
  },
});

export const IdSpectacleInputType = new GraphQLInputObjectType({
  name: "InputSpectacleIdType",
  fields: {
    id: { type: GraphQLString },
  },
});
