// src/store/slices/uiSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ViewMode = 'grid' | 'list';
type ThemeMode = 'light' | 'dark';

interface UiState {
  viewMode: ViewMode;
  themeMode: ThemeMode;
  isDetailModalOpen: boolean;
  selectedPokemonId: string | null;
}

// Load from localStorage
const loadUiState = (): UiState => {
  try {
    const serializedState = localStorage.getItem('uiState');
    if (serializedState === null) {
      return {
        viewMode: 'grid',
        themeMode: 'light',
        isDetailModalOpen: false,
        selectedPokemonId: null,
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {
      viewMode: 'grid',
      themeMode: 'light',
      isDetailModalOpen: false,
      selectedPokemonId: null,
    };
  }
};

const initialState: UiState = loadUiState();

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setViewMode: (state, action: PayloadAction<ViewMode>) => {
      state.viewMode = action.payload;
    },
    
    setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      state.themeMode = action.payload;
    },
    
    openDetailModal: (state, action: PayloadAction<string>) => {
      state.isDetailModalOpen = true;
      state.selectedPokemonId = action.payload;
    },
    
    closeDetailModal: (state) => {
      state.isDetailModalOpen = false;
      state.selectedPokemonId = null;
    },
  },
});

export const { setViewMode, setThemeMode, openDetailModal, closeDetailModal } = uiSlice.actions;

export default uiSlice.reducer;