// src/middleware/localStorage.ts
import { Middleware } from '@reduxjs/toolkit';

export const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  
  // Save pokemon state to localStorage
  if (action.type.startsWith('pokemon/')) {
    const state = store.getState();
    localStorage.setItem('pokemonState', JSON.stringify(state.pokemon));
  }
  
  // Save UI state to localStorage
  if (action.type.startsWith('ui/')) {
    const state = store.getState();
    localStorage.setItem('uiState', JSON.stringify(state.ui));
  }
  
  return result;
};