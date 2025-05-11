// src/store/api/pokemonApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pokemon, PokemonDetail } from '../../types/pokemon';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<Pokemon[], void>({
      query: () => 'pokemon?limit=151',
      transformResponse: (response: any) => {
        return response.results.map((pokemon: any, index: number) => {
          const id = (index + 1).toString().padStart(3, '0');
          return {
            id: id,
            name: pokemon.name,
            url: pokemon.url,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`
          };
        });
      },
    }),
    
    getPokemonByType: builder.query<Pokemon[], string>({
      query: (type) => `type/${type}`,
      transformResponse: (response: any) => {
        return response.pokemon.map((p: any) => {
          // Extract ID from URL
          const urlParts = p.pokemon.url.split('/');
          const id = urlParts[urlParts.length - 2];
          return {
            id: id.padStart(3, '0'),
            name: p.pokemon.name,
            url: p.pokemon.url,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
          };
        });
      },
    }),
    
    getPokemonById: builder.query<PokemonDetail, string>({
      query: (id) => `pokemon/${parseInt(id)}`,
      transformResponse: (response: any) => {
        return {
          id: response.id.toString().padStart(3, '0'),
          name: response.name,
          height: response.height,
          weight: response.weight,
          types: response.types.map((t: any) => t.type.name),
          stats: response.stats.map((s: any) => ({
            name: s.stat.name,
            value: s.base_stat
          })),
          abilities: response.abilities.map((a: any) => a.ability.name),
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.id}.png`
        };
      },
    }),
    
    getTypesList: builder.query<string[], void>({
      query: () => 'type',
      transformResponse: (response: any) => {
        return response.results
          .filter((type: any) => !['unknown', 'shadow'].includes(type.name))
          .map((type: any) => type.name);
      },
    }),
  }),
});

export const { 
  useGetPokemonListQuery, 
  useGetPokemonByIdQuery, 
  useGetPokemonByTypeQuery,
  useGetTypesListQuery 
} = pokemonApi;