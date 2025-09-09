import { GraphQLEnumType, GraphQLList, GraphQLNonNull, GraphQLObjectType } from "graphql";
import { GraphQLBoolean, GraphQLID, GraphQLString } from "graphql/type/scalars";

const spaceTypeEnum = new GraphQLEnumType({
  name: "SpaceTypeEnum",
  values: {
    HOT: { value: "Hot" },
    SAVANA: { value: "Savana" },
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

export const spaceType = new GraphQLObjectType({
  name: 'Space',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    images : { type : new GraphQLList(GraphQLString) },
    types : { type : new GraphQLList(spaceTypeEnum) },
    openHours : { type: GraphQLString },
    closeHours : { type: GraphQLString },
    disabled: { type: GraphQLNonNull(GraphQLBoolean) },
    createdAt : { type: GraphQLString },
    updatedAt : { type: GraphQLString },
  }
});