# Readme.md

[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Medium](https://img.shields.io/badge/Medium-000000?style=flat-square&logo=medium&logoColor=white)](https://bit.ly/3Stx0RP)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)

## 📝 Overview
This project implements a Pokédex application using React Hooks. The application allows users to explore the list of Pokémon, search for specific Pokémon, mark favorite Pokémon, and view details of each Pokémon.

## ✨ React Hooks Used
- ✅ **useState**: Manages component state
- ✅ **useEffect**: Handles side effects such as data fetching
- ✅ **useContext**: Provides and accesses global state
- ✅ **useReducer**: Manages complex state
- ✅ **useCallback**: Memoizes functions
- ✅ **useMemo**: Memoizes calculated values
- ✅ **useRef**: References DOM elements or values in components
- ✅ **Custom Hooks**: Implements reusable logic

## 🚀 Features
- Pokémon list with pagination
- Pokémon search
- Pokémon detail view
- Toggle display mode (grid/list)
- Favorites system (using localStorage)
- Responsive design for mobile and desktop
- Page transition animations

## 💻 How to Run
1. Clone repository
```bash
git clone https://github.com/username/repo-name.git
cd repo-name
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 🧠 Hook Implementation

### useState
Manages local state such as grid/list view, sorting state, and filter state.

### useEffect
Handles data fetching, filtering Pokémon based on search, and storing data in localStorage.

### useContext and useReducer
Manages global application state including Pokémon list, favorites, and filters.

### useCallback
Optimizes handler functions such as toggleFavorite and fetchData.

### useMemo
Optimizes calculations such as sorting and filtering Pokémon.

### Custom Hooks
- **usePokemonData**: Fetches and manages Pokémon data
- **usePokemonDetail**: Fetches detail data for a single Pokémon
- **useDebounce**: Delays searches to prevent excessive API requests
- **useLocalStorage**: Stores and retrieves data from localStorage

## 📂 Project Structure
```
src/
├── assets/            # Images, icons, and other assets
├── components/        # Reusable UI components
├── context/           # Context for state management
├── hooks/             # Custom hooks
├── pages/             # Page components
├── styles/            # CSS files
├── types/             # TypeScript type definitions
├── App.tsx            # Main application component
└── main.tsx           # Entry point
```

---

⭐ Created to fulfill Web Client Development - Project #5 assignment to become the best Architecture in Asia and the world