import { GraphQLFieldConfigMap, GraphQLID, GraphQLList } from "graphql";
import { filmType } from "../schema/Film";

export const filmFields: GraphQLFieldConfigMap<any, any> = {
  ep: {
    type: new GraphQLList(filmType),
    resolve: () => {
      const films = [
        {
          id: '1',
          name: 'A New Hope',
          actors: [null,{ id: '123', name: 'Luke Skywalker' }],
          planets: [{ id: '123', name: 'HOME', climate: 'Hot' }, { id: '456', name: 'Somewhere', climate: 'Cold' }]
        },
        {
          id: '2',
          name: 'The Empire Strikes Back',
          actors: [{ id: '456', name: 'Han Solo' }, { id: '123', name: 'Luke Skywalker' }],
          planets: [{ id: '123', name: 'HOME', climate: 'Hot' }]
        }
      ]
      return films;
    }
  },
}