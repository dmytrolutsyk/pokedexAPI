import { PokemonType } from '../enum';

export interface IPokemon {
    _id?: String,
    name?: String,
    pokenum?: Number,
    type?: PokemonType[],
    height?: Number,
    weight?: Number,
    color?: String,
    species?: String,
    sprite?: String,
    description?: String,
    // trainer: TrainerType,
    locations?: String[],   // Location[]
    talents?: String[],     // Talent[]
    ablities?: String[],    // Ability[]
    evolutions?: String[]   // Pokemon[]
}