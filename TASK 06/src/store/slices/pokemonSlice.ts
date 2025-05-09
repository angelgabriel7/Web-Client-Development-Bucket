// src/store/slices/pokemonSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon, PokemonDetail } from '../../types/pokemon';

interface PokemonState {
  favorites: string[];
  recentlyViewed: string[];
  details: Record<string, PokemonDetail>;
  cachedList: Pokemon[];
}

// Load initial state from localStorage
const loadState = (): PokemonState => {
  try {
    const serializedState = localStorage.getItem('pokemonState');
    if (serializedState === null) {
      return {
        favorites: [],
        recentlyViewed: [],
        details: {},
        cachedList: [],
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {
      favorites: [],
      recentlyViewed: [],
      details: {},
      cachedList: [],
    };
  }
};

const initialState: PokemonState = loadState();

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const pokemonId = action.payload;
      const index = state.favorites.indexOf(pokemonId);
      
      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(pokemonId);
      }
    },
    
    addToRecentlyViewed: (state, action: PayloadAction<string>) => {
      const pokemonId = action.payload;
      // Remove if already exists (to avoid duplicates)
      const filtered = state.recentlyViewed.filter(id => id !== pokemonId);
      // Add to the beginning of the array
      state.recentlyViewed = [pokemonId, ...filtered].slice(0, 10); // Keep last 10
    },
    
    cacheDetail: (state, action: PayloadAction<PokemonDetail>) => {
      const pokemon = action.payload;
      state.details[pokemon.id] = pokemon;
    },
    
    cacheList: (state, action: PayloadAction<Pokemon[]>) => {
      state.cachedList = action.payload;
    },
  },
});

export const { toggleFavorite, addToRecentlyViewed, cacheDetail, cacheList } = pokemonSlice.actions;

export default pokemonSlice.reducer;