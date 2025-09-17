import { GraphQLFieldConfigMap, GraphQLList } from "graphql";
import { MongooseService } from "../services/mongoose";
import { billetType, createBilletInputType } from "../schema/Billet";

export const billetsField: GraphQLFieldConfigMap<any, any> = {
  getAllBillets: {
    type: new GraphQLList(billetType),
    resolve: async () => {
      const mongoose = await MongooseService.getInstance();
      return await mongoose.billetService.getAllBillet();
    },
  },
  createBillet:{
    type: billetType,
    args:{
      input : { type : createBilletInputType}
    },
    resolve: async ({input}) => {
      const mongoose = await MongooseService.getInstance();
      return await mongoose.billetService.createBillet(input);
    }
  }
}