import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat, GraphQLInputObjectType } from "graphql";
import { UserType } from "./User";

export const billetType = new GraphQLObjectType({
    name: "Billet",
    fields: {
      id: { type: GraphQLID },
      user : { type: UserType},
      firstNameOfBeneficiary: { type: GraphQLString },
      lastNameOfBeneficiary: { type: GraphQLString },
      price: { type: GraphQLFloat },
      endOfValidityDate: { type: GraphQLString },
      createdAt: { type: GraphQLString },
      updatedAt: { type: GraphQLString },
    }
});

export const createBilletInputType = new GraphQLInputObjectType({
  name: "CreateBilletInput",
  fields:{
    firstNameOfBeneficiary: { type: GraphQLString },
    lastNameOfBeneficiary: { type: GraphQLString },
    price: { type: GraphQLFloat },
    endOfValidityDate: { type: GraphQLString },
  }
})
