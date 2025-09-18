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
}

export const billetsMutation: GraphQLFieldConfigMap<any, any> = {
  createBillet:{
    type: billetType,
    args:{
      input : { type : createBilletInputType}
    },
    resolve: async (parent,{input},context) => {
      const mongoose = await MongooseService.getInstance();
      const userId = (context as any).user._id;
      console.log(userId);
      input.user = userId;
      return await mongoose.billetService.createBillet(input);
    }
  },
}