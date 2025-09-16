import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString } from "graphql";

export const ConnectionAnswerType = new GraphQLObjectType({
  name: "ConnectionAnswer",
  fields: {
    token: { type: GraphQLString },
    error: { type: GraphQLString }, // nullable automatically
  },
});

export const ConnectionRequestInputType  = new GraphQLInputObjectType({
  name: "ConnectionRequestInputType",
  fields: {
    login: { type: GraphQLString },
    password: { type: GraphQLString },
  },
});
