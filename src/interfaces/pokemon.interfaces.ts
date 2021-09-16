import { PokemonType } from '../enum';

export interface IPokemon {
    _id?: String,
    name?: String,
    pokenum?: Number,
    type?: PokemonType[],
    height?: Number,
    weight?: Number,
    color?: String,
    // Trainer: TrainerType,
    // Location: String,
    // Talents: [Talent],
    // Evolutions: [String],
    // Description: String,
    // Sprite: String
}