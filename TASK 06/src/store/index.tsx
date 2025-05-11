// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './slices/pokemonSlice';
import uiReducer from './slices/uiSlice';
import filterReducer from './slices/filterSlice';
import { localStorageMiddleware } from './middleware/localStorage';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    ui: uiReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;