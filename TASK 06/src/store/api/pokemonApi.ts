// src/store/api/pokemonApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pokemon, PokemonDetail } from '../../types/pokemon';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<{ results: Pokemon[], count: number }, { limit: number, offset: number }>({
      query: ({ limit = 20, offset = 0 }) => `pokemon?limit=${limit}&offset=${offset}`,
      transformResponse: (response: any) => {
        // Transform response to add ID and image URL
        const pokemonList = response.results.map((pokemon: any, index: number) => {
          const id = pokemon.url.split('/').filter(Boolean).pop();
          return {
            ...pokemon,
            id,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          };
        });
        
        return {
          results: pokemonList,
          count: response.count,
        };
      },
    }),
    
    getPokemonDetail: builder.query<PokemonDetail, string>({
      query: (id) => `pokemon/${id}`,
      transformResponse: (response: any) => {
        return {
          id: response.id,
          name: response.name,
          height: response.height / 10, // Convert to meters
          weight: response.weight / 10, // Convert to kg
          types: response.types.map((t: any) => t.type.name),
          abilities: response.abilities.map((a: any) => a.ability.name),
          stats: response.stats.map((s: any) => ({
            name: s.stat.name,
            value: s.base_stat
          })),
          imageUrl: response.sprites.other['official-artwork'].front_default,
        };
      },
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonDetailQuery } = pokemonApi;