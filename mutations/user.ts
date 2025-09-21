import { GraphQLFieldConfigMap } from "graphql";
import { ConnectionAnswerType, RegisterInputType } from "../schema/User";
import { MongooseService } from "../services/mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const userMutations: GraphQLFieldConfigMap<any, any> = {
  register: {
    type: ConnectionAnswerType,
    args: {
      input: { type: RegisterInputType }
    },
    resolve: async (_, { input }) => {
      const mongoose = await MongooseService.getInstance();

      const existing = await mongoose.userService.findByLoginOrEmail(input.login, input.email);
      if (existing) {
        return { token: null, error: "User already exists with this login or email" };
      }

      const newUser = await mongoose.userService.createUser({
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        login: input.login,
        password: input.password, 
      });

      const token = jwt.sign(
        { id: newUser._id },
        process.env.SECRET_KEY as string,
        { expiresIn: "72h" }
      );

      return { token, error: null };
    }
  }
};
