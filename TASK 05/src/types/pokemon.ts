// src/types/pokemon.ts
export interface Pokemon {
  id: number;
  name: string;
  url: string;
  image: string;
}

export interface PokemonStat {
  name: string;
  value: number;
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
  abilities: string[];
  stats: PokemonStat[];
  image: string;
}