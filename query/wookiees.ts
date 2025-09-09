import { GraphQLFieldConfigMap, GraphQLID } from "graphql";
import { wookieeType } from "../schema/Wookiees";

export const wookieesFields: GraphQLFieldConfigMap<any, any> = {
  chewbacca: {
    type: wookieeType,
    resolve: () => {
      const chewbacca = {
        id: 'Chewbacca',
        name: 'Chewbacca',
        history: 'Chewbacca is a Wookiee from the planet Kashyyyk.'
      }
      return chewbacca;
    }
  },
  /*
    wookie(id:"Chewbacca"){
      name
    }
  */
  wookie: {
    type: wookieeType,
    args: {
      id: { type: GraphQLID }
    },
    resolve: (_, { id }) => {
      console.log(`Resolver called: Query.wookie with id=${id}`);
      if(id == 'Chewbacca') {
        return {
          id: 'Chewbacca',
          name: 'Chewbacca',
          history: 'Chewbacca is a Wookiee from the planet Kashyyyk.'
        }
      }
      return null;
    }
  }
}