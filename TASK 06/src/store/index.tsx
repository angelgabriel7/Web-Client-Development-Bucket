// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './slices/pokemonSlice';
import uiReducer from './slices/uiSlice';
import filterReducer from './slices/filterSlice';
import { pokemonApi } from './api/pokemonApi';
import { localStorageMiddleware } from './middleware/localStorage';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    ui: uiReducer,
    filter: filterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(pokemonApi.middleware)
      .concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;