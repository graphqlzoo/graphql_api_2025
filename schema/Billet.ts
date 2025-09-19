import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat, GraphQLInputObjectType, GraphQLEnumType } from "graphql";
import { UserType } from "./User";

const enumBilletType = new GraphQLEnumType({
  name: "EnumBilletType",
  values: {
    VIP: { value: "VIP" },
    STANDARD: { value: "STANDARD" },
    ECONOMY: { value: "ECONOMY" },
  }
})

export const billetType = new GraphQLObjectType({
    name: "Billet",
    fields: {
      id: { type: GraphQLID },
      user : { type: UserType},
      firstNameOfBeneficiary: { type: GraphQLString },
      lastNameOfBeneficiary: { type: GraphQLString },
      price: { type: GraphQLFloat },
      type: { type: enumBilletType },
      endOfValidityDate: { type: GraphQLString },
      createdAt: { type: GraphQLString },
      updatedAt: { type: GraphQLString },
    }
});

export const createBilletInputType = new GraphQLInputObjectType({
  name: "CreateBilletInput",
  fields:{
    id: { type: GraphQLID },
    firstNameOfBeneficiary: { type: GraphQLString },
    lastNameOfBeneficiary: { type: GraphQLString },
    price: { type: GraphQLFloat },
    endOfValidityDate: { type: GraphQLString },
    type: { type: enumBilletType },
  }
})
