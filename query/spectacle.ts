import { GraphQLFieldConfigMap, GraphQLList } from "graphql";
import { MongooseService } from "../services";
import { SpectacleType } from "../schema/Spectacle";

export const spectacleField: GraphQLFieldConfigMap<any, any> = {
  getAllSpectacles: {
    type: new GraphQLList(SpectacleType),
    resolve: async () => {
      const mongoose = await MongooseService.getInstance();
      return await mongoose.spectacleService.allSpectacles();
    },
  },
};
