import { GraphQLFieldConfigMap, GraphQLNonNull, GraphQLString } from "graphql";
import { ConnectionAnswerType, RegisterInputType, UserType } from "../schema/User";
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
  },

  updateEmail: {
    type: UserType,
    args: {
      newEmail: { type: GraphQLNonNull(GraphQLString) }
    },
    resolve: async (_, { newEmail }, context) => {
      if (!context.user) {
        throw new Error("Unauthorized");
      }

      const mongoose = await MongooseService.getInstance();

      const existing = await mongoose.userService.findByLoginOrEmail("", newEmail);
      if (existing) {
        throw new Error("Email already in use");
      }

      const updatedUser = await mongoose.userService.updateUserEmail(context.user._id, newEmail);

      return updatedUser;
    }
  }
};
