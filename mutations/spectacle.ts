import { GraphQLFieldConfigMap } from "graphql";
import { SpectacleType } from "../schema/Spectacle";
import { MongooseService } from "../services/mongoose";
import { GraphQLInputObjectType, GraphQLString, GraphQLList, GraphQLNonNull } from "graphql";

export const CreateSpectacleInputType = new GraphQLInputObjectType({
  name: "CreateSpectacleInput",
  fields: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    startTime: { type: new GraphQLNonNull(GraphQLString) },
    endTime: { type: new GraphQLNonNull(GraphQLString) },
    animals: { type: new GraphQLList(GraphQLString) }, 
  },
});

export const spectacleMutations: GraphQLFieldConfigMap<any, any> = {
  createSpectacle: {
    type: SpectacleType,
    args: {
      input: { type: CreateSpectacleInputType },
    },
    resolve: async (_, { input }) => {
      const mongoose = await MongooseService.getInstance();
      return await mongoose.spectacleService.createSpectacle({
        title: input.title,
        description: input.description,
        startTime: input.startTime,
        endTime: input.endTime,
        animals: input.animals ?? [],
      });
    },
  },
};
