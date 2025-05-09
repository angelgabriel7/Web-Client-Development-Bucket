// src/pages/HomePage/index.tsx
import React, { useState, useEffect } from 'react';
import PokemonList from '../../components/PokemonList';
import { usePokemonData } from '../../hooks/usePokemonData';
import { FiSearch, FiHeart, FiGrid, FiList } from 'react-icons/fi';

const HomePage: React.FC = () => {
  const { 
    pokemons, 
    loading, 
    error, 
    favorites, 
    searchTerm, 
    setSearchTerm, 
    toggleFavorite 
  } = usePokemonData();

  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Filter pokemons based on favorites setting
  const displayedPokemons = showFavoritesOnly 
    ? pokemons.filter(pokemon => favorites.includes(pokemon.id))
    : pokemons;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Pokédex</h1>
      
      {/* Search and filter controls */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search Pokémon..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex items-center">
          <button
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
              showFavoritesOnly ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            <FiHeart className={showFavoritesOnly ? 'fill-white' : ''} />
            <span>{showFavoritesOnly ? 'All Pokémon' : 'Favorites Only'}</span>
          </button>
          
          <div className="ml-auto text-gray-500">
            {displayedPokemons.length} Pokémon
          </div>
        </div>
      </div>
      
      {/* Pokemon List component */}
      <PokemonList
        pokemons={displayedPokemons}
        loading={loading}
        error={error}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default HomePage;