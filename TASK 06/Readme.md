# Pokédex with State Management

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![RTK Query](https://img.shields.io/badge/RTK_Query-764ABC?style=flat-square&logo=redux&logoColor=white)
[![Medium](https://img.shields.io/badge/Medium-000000?style=flat-square&logo=medium&logoColor=white)](https://bit.ly/4dbgn7b)

## 📝 Overview
This project implements a Pokédex application using React with State Management (Redux). The application allows users to browse Pokémon lists, search for specific Pokémon, bookmark favorites, and view details of each Pokémon.

## ✨ State Management Features Implemented
- Global State Management using Redux Toolkit
- API data caching with RTK Query
- Data persistence with localStorage
- Custom middleware for storing state in localStorage
- Filtering and sorting state
- UI state management (layout, theme, modal)
- Data normalization for quick access

## 🚀 Application Features
- Pokémon list with pagination
- Search and filter Pokémon
- Pokémon detail view
- Toggle view mode (grid/list)
- Favorites system (using localStorage)
- Filter by name, type, ID
- Sort by name and ID
- Favorites view filter
- Responsive design for mobile and desktop

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

## 🧠 State Management Implementation

### Redux Store
- **Store Configuration**: Store implementation with Redux Toolkit
- **Slices**: Modular state with pokemonSlice, uiSlice, and filterSlice
- **Middleware**: Custom middleware for localStorage persistence
- **Selectors**: State selection that minimizes re-rendering

### RTK Query
- **API Integration**: Integrated with PokeAPI
- **Caching**: Automatic caching of API request results
- **Transformations**: Transform API data to a more usable format

### Redux Patterns
- **Normalized State**: Store Pokémon data in a normalized format
- **Selector Memoization**: Optimization to avoid repeated calculations
- **Action Creators**: Well-documented and reusable actions
- **Side Effect Handling**: Managing side effects with middleware

## 📂 Redux Project Structure
```
src/store/
├── slices/                 # Redux slices (modular state)
│   ├── pokemonSlice.ts     # Pokémon state (favorites, cache)
│   ├── uiSlice.ts          # UI state (theme, layout)
│   └── filterSlice.ts      # Filter and sorting state
├── api/                    # API endpoints with RTK Query
│   └── pokemonApi.ts
├── middleware/             # Custom Redux middleware
│   └── localStorage.ts
├── hooks.ts                # Custom hooks for Redux
└── index.ts                # Store configuration
```

## 📚 Read Related Article
For a deeper understanding of state management in React, read my Medium article: [Understanding State Management in React](https://bit.ly/4dbgn7b)

---

⭐ Created to fulfill Web Client Development - Project #6 ⭐