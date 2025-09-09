import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLEnumType, GraphQLList } from "graphql";
import { spaceshipType } from "./Spaceship";
import { filmType } from "./Film";

const genderEnum = new GraphQLEnumType({
  name: "Gender",
  values: {
    FEMALE: { value: "Femme" },
    MALE: { value: "Homme" },
    OTHER: { value: "Other" },
    UNKNOWN: { value: "Unknown" }
  }
});

export const humanType = new GraphQLObjectType({
  name: 'Human',
  fields: {
    id: {
      type: GraphQLID,
      resolve: obj => {
        console.log(`Resolver called: Human.id with ${JSON.stringify(obj)}`);
        return obj.id;
      }
    },
    name: {
      type: GraphQLString,
      resolve: obj => { // Not forced since default resolver would work
        console.log(
          `Resolver called: Human.name with ${JSON.stringify(obj)}`
        );
        return obj.name;
      }
    },
    height: {
      type: GraphQLInt,
      resolve: obj => {
        console.log(
          `Resolver called: Human.height with ${JSON.stringify(obj)}`
        );
        return obj.height;
      }
    },
    mass: {
      type: GraphQLInt,
      resolve: obj => {
        console.log(
          `Resolver called: Human.mass with ${JSON.stringify(obj)}`
        );
        return obj.mass;
      }
    },
    isJedi: {
      type: GraphQLBoolean,
      resolve: obj => {
        console.log(
          `Resolver called: Human.isJedi with ${JSON.stringify(obj)}`
        );
        return obj.isJedi;
      }
    },
    birthYear: {
      type: GraphQLInt,
    },
    avatarUrl:{
      type: GraphQLString,
    },
    humanGender:{
      type: genderEnum,
    },
    spaceship: {
      type: spaceshipType,
      resolve: async (human, _, context) => {
        if (!human.spaceshipId) return null;
        return {
          id: human.spaceshipId,
          name: "Millennium Falcon",
          test:"Test"
        };
      }
    },
    appearsIn: {
      type: new GraphQLList(filmType),
    }
  }
});