// src/hooks/usePokemonData.ts
import { useEffect, useState, useCallback } from 'react';
import { usePokemonContext } from '../context/PokemonContext';
import { Pokemon } from '../types/pokemon';
import { useDebounce } from './useDebounce';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const usePokemonData = () => {
  const { state, dispatch } = usePokemonContext();
  const { searchTerm, pokemons, filteredPokemons } = state;
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Using the useCallback hook to memoize the fetch function
  const fetchPokemons = useCallback(async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const response = await fetch(`${API_URL}?limit=151`);
      const data = await response.json();
      
      // Transform data to include ID
      const formattedData: Pokemon[] = data.results.map((pokemon: any, index: number) => ({
        id: index + 1,
        name: pokemon.name,
        url: pokemon.url,
        // Image URL pattern from PokeAPI
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`
      }));
      
      dispatch({ type: 'FETCH_SUCCESS', payload: formattedData });
    } catch (error) {
      dispatch({ 
        type: 'FETCH_ERROR', 
        payload: error instanceof Error ? error.message : 'An unknown error occurred' 
      });
    }
  }, [dispatch]);

  // Using useEffect for data fetching on component mount
  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  // Using useEffect for filtering based on search term
  useEffect(() => {
    if (debouncedSearchTerm === '') {
      dispatch({ type: 'SET_FILTERED_POKEMONS', payload: pokemons });
      return;
    }

    const filtered = pokemons.filter(pokemon => 
      pokemon.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
    
    dispatch({ type: 'SET_FILTERED_POKEMONS', payload: filtered });
  }, [debouncedSearchTerm, pokemons, dispatch]);

  // Toggle favorite status
  const toggleFavorite = useCallback((id: number) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: id });
  }, [dispatch]);

  // Update search term
  const setSearchTerm = useCallback((term: string) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: term });
  }, [dispatch]);

  return {
    pokemons: filteredPokemons,
    loading: state.loading,
    error: state.error,
    favorites: state.favorites,
    searchTerm: state.searchTerm,
    toggleFavorite,
    setSearchTerm,
    refetch: fetchPokemons
  };
};