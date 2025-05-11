// src/store/slices/filterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface FilterState {
  searchTerm: string;
  type: string | null;
  favorites: boolean;
  sortBy: 'id' | 'name';
  sortOrder: 'asc' | 'desc';
}

const initialState: FilterState = {
  searchTerm: '',
  type: null,
  favorites: false,
  sortBy: 'id',
  sortOrder: 'asc'
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setTypeFilter: (state, action: PayloadAction<string | null>) => {
      state.type = action.payload;
    },
    toggleFavorites: (state) => {
      state.favorites = !state.favorites;
    },
    setSortBy: (state, action: PayloadAction<'id' | 'name'>) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortOrder = action.payload;
    },
    toggleSortOrder: (state) => {
      state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
    },
    resetFilters: (state) => {
      return initialState;
    }
  }
});

export const { 
  setSearchTerm, 
  setTypeFilter, 
  toggleFavorites, 
  setSortBy, 
  setSortOrder,
  toggleSortOrder,
  resetFilters 
} = filterSlice.actions;

// Selectors
export const selectFilters = (state: RootState) => state.filter;

export default filterSlice.reducer;