// src/hooks/usePokemonDetail.ts
import { useState, useEffect, useCallback } from 'react';
import { PokemonDetail } from '../types/pokemon';

export const usePokemonDetail = (id: number) => {
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemonDetail = useCallback(async () => {
    if (!id) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch Pokemon: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Transform data for our use
      const pokemonData: PokemonDetail = {
        id: data.id,
        name: data.name,
        height: data.height / 10, // Convert to meters
        weight: data.weight / 10, // Convert to kg
        types: data.types.map((type: any) => type.type.name),
        abilities: data.abilities.map((ability: any) => ability.ability.name),
        stats: data.stats.map((stat: any) => ({
          name: stat.stat.name,
          value: stat.base_stat
        })),
        image: data.sprites.other['official-artwork'].front_default
      };
      
      setPokemon(pokemonData);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, [id]);

  // Fetch data when component mounts or ID changes
  useEffect(() => {
    fetchPokemonDetail();
  }, [fetchPokemonDetail]);

  return { pokemon, loading, error, refetch: fetchPokemonDetail };
};