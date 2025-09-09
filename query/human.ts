import { GraphQLFieldConfigMap, GraphQLList } from "graphql";
import { humanType } from "../schema/Human";
import { spaceshipType } from "../schema/Spaceship";

export const humanFields: GraphQLFieldConfigMap<any, any> = {
  lukeSkywalker: {
    type: humanType,
    resolve: () => {
      console.log(`Resolver called: Query.lukeSkywalker`);
      // Our object fetched from our database
      const lukeSkywalker = {
        id: '123',
        name: 'Luke Skywalker',
        isJedi : true,
        spaceshipId: "12345",
        humanGender: "Homme",
        appearsIn: [{ id: '1', name: 'A New Hope' }, { id: '2', name: 'The Empire Strikes Back' }]
      };
      return lukeSkywalker;
    }
  },
  leiaOrgana: {
    type: humanType,
    resolve: () => {
      console.log(`Resolver called: Query.leiaOrgana`);
      // Our object fetched from our database
      const leiaOrgana = {
        id: 'Femme',
        name: 'Leia Organa',
        isJedi : false
      };
      return leiaOrgana;
    }
  },
  hanSolo: {
    type: humanType,
    resolve: () => {
      console.log(`Resolver called: Query.hanSolo`);
      // Our object fetched from our database
      const hanSolo = {
        id: 'Han',
        name: 'Han Solo',
        isJedi: false
      };
      return hanSolo;
    }
  },
  humans: {
    type: new GraphQLList(humanType),
    resolve: () => {
      console.log(`Resolver called: Query.humans`);
      // Imagine this is fetched from a DB
      return [
        { id: '123', name: 'Luke Skywalker' },
        { id: 'Femme', name: 'Leia Organa' },
        { id: 'Han', name: 'Han Solo', isJedi: false }
      ];
    }
  },
}