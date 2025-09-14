import { GraphQLObjectType, GraphQLString } from "graphql";

export const ConnectionAnswerType = new GraphQLObjectType({
  name: "ConnectionAnswer",
  fields: {
    token: { type: GraphQLString },
    error: { type: GraphQLString }, // nullable automatically
  },
});
