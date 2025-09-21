import { GraphQLFieldConfigMap } from "graphql";
import { ConnectionAnswerType, ConnectionRequestInputType, UserType } from "../schema/User";
import { MongooseService } from "../services/mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const userFields: GraphQLFieldConfigMap<any, any> = {
  connection: {
    type: ConnectionAnswerType,
    args: {
      input: { type: ConnectionRequestInputType }
    },
    resolve: async (_, { input }) => {
      const user = await (await MongooseService.getInstance()).userService.findValidUser(input.login, input.password);
      if(user){
        const token = jwt.sign({
          id: user._id,
        }, process.env.SECRET_KEY as string, { expiresIn: "72h" });
        return {
          token: token,
          error: null
        };
      }
      else {
        return { token: null, error: "Invalid credentials" };
      }
    },
  },
  me: {
  type: UserType,
  resolve: async (_, __, { user }) => {
    if (!user) throw new Error("Not authenticated");
    return user; // récupéré dans buildContext
  },
},

  
}