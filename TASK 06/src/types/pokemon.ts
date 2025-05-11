// src/types/pokemon.ts
export interface Pokemon {
  id: string;
  name: string;
  url: string;
  image: string;
}

export interface PokemonDetail extends Pokemon {
  height: number;
  weight: number;
  types: string[];
  stats: {
    name: string;
    value: number;
  }[];
  abilities: string[];
}