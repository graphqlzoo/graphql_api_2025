import { GraphQLFieldConfigMap, GraphQLList } from "graphql";
import { ConnectionAnswerType } from "../schema/User";

export const userFields: GraphQLFieldConfigMap<any, any> = {
  connection: {
    type: ConnectionAnswerType,
    resolve: () => {
      console.log(`Resolver called: Query.lukeSkywalker`);
      return {
        "token" : "fake-jwt",
        "error" : null
      };
    }
  },
}