// src/context/PokemonContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Pokemon, PokemonDetail } from '../types/pokemon';

// Define state
interface PokemonState {
  pokemons: Pokemon[];
  loading: boolean;
  error: string | null;
  favorites: number[];
  filteredPokemons: Pokemon[];
  searchTerm: string;
}

// Define actions
type PokemonAction =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: Pokemon[] }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'TOGGLE_FAVORITE'; payload: number }
  | { type: 'SET_SEARCH_TERM'; payload: string }
  | { type: 'SET_FILTERED_POKEMONS'; payload: Pokemon[] };

// Initial state
const initialState: PokemonState = {
  pokemons: [],
  loading: false,
  error: null,
  favorites: [],
  filteredPokemons: [],
  searchTerm: '',
};

// Create context
const PokemonContext = createContext<{
  state: PokemonState;
  dispatch: React.Dispatch<PokemonAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Create reducer
const pokemonReducer = (state: PokemonState, action: PokemonAction): PokemonState => {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        pokemons: action.payload,
        filteredPokemons: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'TOGGLE_FAVORITE': {
      const isFavorite = state.favorites.includes(action.payload);
      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter(id => id !== action.payload)
          : [...state.favorites, action.payload],
      };
    }
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    case 'SET_FILTERED_POKEMONS':
      return {
        ...state,
        filteredPokemons: action.payload,
      };
    default:
      return state;
  }
};

// Create provider
export const PokemonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Using useReducer hook to manage complex state
  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};

// Custom hook to use the Pokemon context
export const usePokemonContext = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemonContext must be used within a PokemonProvider');
  }
  return context;
};