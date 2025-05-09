// src/components/PokemonList/index.tsx
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Pokemon } from '../../types/pokemon';
import { usePokemonContext } from '../../context/PokemonContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { FiHeart } from 'react-icons/fi';

interface PokemonListProps {
  pokemons: Pokemon[];
  loading: boolean;
  error: string | null;
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ 
  pokemons, 
  loading, 
  error, 
  favorites, 
  toggleFavorite 
}) => {
  const [viewMode, setViewMode] = useLocalStorage<'grid' | 'list'>('viewMode', 'grid');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Using useMemo to optimize the sorting of pokemons
  const sortedPokemons = useMemo(() => {
    return [...pokemons].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
  }, [pokemons, sortOrder]);

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-64 text-red-500">{error}</div>;
  }

  if (sortedPokemons.length === 0) {
    return <div className="flex justify-center items-center h-64">No Pokémon found</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <label htmlFor="sort-order" className="mr-2">Sort Order:</label>
          <select 
            id="sort-order"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
            className="p-2 border rounded"
          >
            <option value="asc">ID (Low to High)</option>
            <option value="desc">ID (High to Low)</option>
          </select>
        </div>
        
        <div>
          <button 
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1 mr-2 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Grid
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`px-3 py-1 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            List
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sortedPokemons.map(pokemon => (
            <div key={pokemon.id} className="bg-white rounded-lg shadow p-4 transition hover:shadow-lg">
              <div className="relative">
                <img 
                  src={pokemon.image} 
                  alt={pokemon.name} 
                  className="w-full h-48 object-contain"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(pokemon.id);
                  }}
                  className="absolute top-2 right-2 p-2 rounded-full bg-white shadow"
                >
                  <FiHeart 
                    className={favorites.includes(pokemon.id) ? 'text-red-500 fill-red-500' : 'text-gray-400'} 
                    size={20} 
                  />
                </button>
              </div>
              <Link to={`/pokemon/${pokemon.id}`} className="block mt-2">
                <h3 className="text-lg font-semibold capitalize">{pokemon.name}</h3>
                <p className="text-gray-500">#{pokemon.id.toString().padStart(3, '0')}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {sortedPokemons.map(pokemon => (
            <div key={pokemon.id} className="bg-white rounded-lg shadow p-4 flex items-center">
              <img 
                src={pokemon.image} 
                alt={pokemon.name} 
                className="w-20 h-20 object-contain mr-4"
              />
              <div className="flex-1">
                <Link to={`/pokemon/${pokemon.id}`}>
                  <h3 className="text-lg font-semibold capitalize">{pokemon.name}</h3>
                  <p className="text-gray-500">#{pokemon.id.toString().padStart(3, '0')}</p>
                </Link>
              </div>
              <button
                onClick={() => toggleFavorite(pokemon.id)}
                className="p-2 rounded-full bg-gray-100"
              >
                <FiHeart 
                  className={favorites.includes(pokemon.id) ? 'text-red-500 fill-red-500' : 'text-gray-400'} 
                  size={20} 
                />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;