// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './api/pokemonApi';
import pokemonReducer from './slices/pokemonSlice';
import uiReducer from './slices/uiSlice';
import filterReducer from './slices/filterSlice';
import { localStorageMiddleware } from './middleware/localStorage';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    ui: uiReducer,
    filter: filterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware, localStorageMiddleware),
});

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;