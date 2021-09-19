import {
    GraphQLInputObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLFloat
  } from 'graphql';

import PokemonTypeGraph from '../enums/pokemon.type.graph.enum'
import MoveTypeGraph from '../enums/move.types.graph.enum';

export default new GraphQLInputObjectType({
  name: 'MoveInput',
  fields: {
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    type: {
      type: PokemonTypeGraph
    },
    moveType: {
      type: MoveTypeGraph,
    },
    power: {
      type: GraphQLInt
    },
    precision: {
      type: GraphQLFloat,
    },
    powerPoint: {
      type: GraphQLInt
    },
    target: {
      type: GraphQLInt,
    },
  }
});