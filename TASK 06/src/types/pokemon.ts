// src/types/pokemon.ts
export interface Pokemon {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
}

export interface PokemonStat {
  name: string;
  value: number;
}

export interface PokemonDetail {
  id: string;
  name: string;
  height: number;
  weight: number;
  types: string[];
  abilities: string[];
  stats: PokemonStat[];
  imageUrl: string;
}