// src/components/FilterPanel/index.tsx
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { 
  setSearchTerm, 
  setTypeFilter, 
  setSortBy, 
  setSortOrder, 
  toggleFavoritesOnly,
  resetFilters 
} from '../../store/slices/filterSlice';
import { FiSearch, FiFilter, FiHeart, FiX } from 'react-icons/fi';

const FilterPanel = () => {
  const dispatch = useAppDispatch();
  const { searchTerm, typeFilter, sortBy, sortOrder, showFavoritesOnly } = useAppSelector(state => state.filter);
  
  // For search input debouncing
  const [searchInput, setSearchInput] = useState(searchTerm);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearchTerm(searchInput));
    }, 500);
    
    return () => clearTimeout(timer);
  }, [searchInput, dispatch]);

  const pokemonTypes = [
    'normal', 'fire', 'water', 'grass', 'electric', 'ice', 'fighting', 'poison', 
    'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 
    'steel', 'fairy'
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="flex flex-col space-y-4">
        {/* Search bar */}
        <div className="relative">
          <FiSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search Pokémon..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {searchInput && (
            <button
              onClick={() => {
                setSearchInput('');
                dispatch(setSearchTerm(''));
              }}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FiX size={20} />
            </button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 items-center">
          {/* Type filter dropdown */}
          <div className="w-40">
            <select
              value={typeFilter || ''}
              onChange={(e) => dispatch(setTypeFilter(e.target.value || null))}
              className="w-full p-2 border rounded-lg"
            >
              <option value="">All Types</option>
              {pokemonTypes.map(type => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
          
          {/* Sort controls */}
          <div className="w-40">
            <select
              value={sortBy}
              onChange={(e) => dispatch(setSortBy(e.target.value as 'id' | 'name'))}
              className="w-full p-2 border rounded-lg"
            >
              <option value="id">Sort by ID</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>
          
          <div className="w-40">
            <select
              value={sortOrder}
              onChange={(e) => dispatch(setSortOrder(e.target.value as 'asc' | 'desc'))}
              className="w-full p-2 border rounded-lg"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          
          {/* Favorites toggle */}
          <button
            onClick={() => dispatch(toggleFavoritesOnly())}
            className={`flex items-center space-x-1 px-4 py-2 rounded-lg ${
              showFavoritesOnly 
                ? 'bg-red-500 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            <FiHeart />
            <span>Favorites</span>
          </button>
          
          {/* Reset button */}
          <button
            onClick={() => {
              dispatch(resetFilters());
              setSearchInput('');
            }}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;