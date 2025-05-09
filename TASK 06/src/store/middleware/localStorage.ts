// src/store/middleware/localStorage.ts
import { Middleware } from '@reduxjs/toolkit';
import { RootState } from '../index';

export const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  // Call the next dispatch method in the middleware chain
  const result = next(action);
  
  // Get the current state after the action has been processed
  const state = store.getState() as RootState;
  
  // Save state to localStorage
  if (action.type.startsWith('pokemon/')) {
    localStorage.setItem('pokemonState', JSON.stringify(state.pokemon));
  }
  
  if (action.type.startsWith('ui/')) {
    localStorage.setItem('uiState', JSON.stringify(state.ui));
  }
  
  return result;
};