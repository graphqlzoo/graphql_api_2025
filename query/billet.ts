import { GraphQLFieldConfigMap, GraphQLList } from "graphql";
import { MongooseService } from "../services/mongoose";
import { billetType, createBilletInputType } from "../schema/Billet";
import { IdRequestInputType } from "../schema/Animal";

export const billetsField: GraphQLFieldConfigMap<any, any> = {
  getAllBillets: {
    type: new GraphQLList(billetType),
    resolve: async (parent,{input},context) => {
      const mongoose = await MongooseService.getInstance();
      const userId = (context as any).user._id;
      console.log(userId);
      return await mongoose.billetService.getAllBilletByUserId(userId);
    },
  },
  getBilletById: {
    type: billetType,
    args:{
      input : { type : IdRequestInputType}
    },
    resolve: async (parent,{input},context) => {
      console.log("Input",input);
      const mongoose = await MongooseService.getInstance();
      const id = input.id;
      console.log("INput id",id);
      return await mongoose.billetService.getBilletById(id);
    }
  }
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
  deleteBillet:{
    type: billetType,
    args:{
      input : { type : IdRequestInputType}
    },
    resolve: async (parent,{input},context) => {
      const mongoose = await MongooseService.getInstance();
      const id = input.id;
      console.log("INput id",id);
      return await mongoose.billetService.deleteBillet(id);
    }
  },
  patchBillet:{
    type: billetType,
    args:{
      input : { type : createBilletInputType}
    },
    resolve: async (parent,{input},context) => {
      const mongoose = await MongooseService.getInstance();
      return await mongoose.billetService.patchBillet(input);
    }
  }
}