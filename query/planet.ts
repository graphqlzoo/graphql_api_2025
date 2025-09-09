import { GraphQLFieldConfigMap, GraphQLID } from "graphql";
import { planetType } from "../schema/Planet";

export const planetFields: GraphQLFieldConfigMap<any, any> = {
  earth: {
    type: planetType,
    resolve: () => {
      const planet = {
        id: '123',
        name: 'HOME',
        climate: 'Hot'
      }
      return planet;
    }
  },
  somewhere: {
    type: planetType,
    resolve: () => {
      const planet = {
        id: '456',
        name: 'Somewhere',
        climate: 'Cold'
      }
    } 
  }
}