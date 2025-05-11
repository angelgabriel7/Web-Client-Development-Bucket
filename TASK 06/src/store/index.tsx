// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './slices/pokemonSlice';
import uiReducer from './slices/uiSlice';
import filterReducer from './slices/filterSlice';
import { pokemonApi } from './api/pokemonApi'; // Pastikan ini diimpor
import { localStorageMiddleware } from './middleware/localStorage';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    ui: uiReducer,
    filter: filterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer, // Tambahkan ini
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(localStorageMiddleware)
      .concat(pokemonApi.middleware), // Tambahkan middleware RTK Query
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;