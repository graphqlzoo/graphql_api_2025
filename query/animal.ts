import { GraphQLFieldConfigMap, GraphQLList } from "graphql";
import { MongooseService } from "../services";
import { animalType, IdRequestInputType } from "../schema/Animal";

export const animalsField: GraphQLFieldConfigMap<any, any> = {
  getAllAnimals: {
    type: new GraphQLList(animalType),
    resolve: async () => {
      const mongoose = await MongooseService.getInstance();
      return await mongoose.animalService.allAnimals();
    },
  },
  getAnimalsBySpaceId: {
    type: new GraphQLList(animalType),
    args: {
      input: { type: IdRequestInputType },
    },
    resolve: async (_, { input }) => {
      const mongoose = await MongooseService.getInstance();
      return await mongoose.animalService.animalBySpaceId(input.id);
    },
  },
  getAnimalById: {
    type: animalType,
    args: {
      input: { type: IdRequestInputType },
    },
    resolve: async (_, { input }) => {
      const mongoose = await MongooseService.getInstance();
      return await mongoose.animalService.animalById(input.id);
    },
  }
}