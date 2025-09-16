import { GraphQLFieldConfigMap, GraphQLList } from "graphql";
import { MongooseService } from "../services/mongoose";
import { SpaceAnswerType } from "../schema/Space";

export const spacesField: GraphQLFieldConfigMap<any, any> = {
  getAllSpaces: {
    type: new GraphQLList(SpaceAnswerType),
    resolve: async () => {
      const mongoose = await MongooseService.getInstance();
      return await mongoose.spaceService.getAllSpaces();
    },
  },
}