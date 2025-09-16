import { GraphQLEnumType, GraphQLList, GraphQLNonNull, GraphQLObjectType } from "graphql";
import { GraphQLBoolean, GraphQLID, GraphQLInt, GraphQLString } from "graphql/type/scalars";

const spaceTypeEnum = new GraphQLEnumType({
  name: "SpaceTypeEnum",
  values: {
    HOT: { value: "Hot" },
    SAVANA: { value: "Savanna" },
    TAIGA: { value: "Taiga" },
    TUNDRA: { value: "Tundra" },
    MOUNTAIN: { value: "Mountain" },
    DESERT: { value: "Desert" },
    COLD: { value: "Cold" },
    HUMID: { value: "Humid" },
    TROPICAL : { value: "Tropical" },
    OTHER: { value: "Other" },
  }
});

export const SpaceAnswerType = new GraphQLObjectType({
  name: 'Space',
  fields: {
    id: { type: GraphQLID,},
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    images : { type : new GraphQLList(GraphQLString) },
    types : { type : new GraphQLList(spaceTypeEnum) },
    openingHours : { type: GraphQLInt },
    closingHours : { type: GraphQLInt },
    disabled: { type: GraphQLBoolean },
    createdAt : { type: GraphQLString },
    updatedAt : { type: GraphQLString },
  }
});