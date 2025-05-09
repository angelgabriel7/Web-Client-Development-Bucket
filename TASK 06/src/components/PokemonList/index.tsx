// src/components/PokemonList/index.tsx
import { useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { useGetPokemonListQuery } from '../../store/api/pokemonApi';
import { toggleFavorite } from '../../store/slices/pokemonSlice';
import { setViewMode } from '../../store/slices/uiSlice';
import PokemonCard from '../PokemonCard';
import { FiGrid, FiList } from 'react-icons/fi';

const PokemonList = () => {
  const dispatch = useAppDispatch();
  const { viewMode } = useAppSelector(state => state.ui);
  const { favorites } = useAppSelector(state => state.pokemon);
  const { searchTerm, typeFilter, sortBy, sortOrder, showFavoritesOnly } = useAppSelector(state => state.filter);
  
  // Fetch Pokémon list
  const { data, isLoading, error } = useGetPokemonListQuery({ limit: 151, offset: 0 });
  
  // Apply filters and sorting
  const filteredPokemon = useMemo(() => {
    if (!data) return [];
    
    let result = [...data.results];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        pokemon.id.toString().includes(searchTerm)
      );
    }
    
    // Apply type filter - this would require additional data fetching in a real app
    // In a complete implementation, we'd need to fetch type information for each Pokémon
    
    // Apply favorites filter
    if (showFavoritesOnly) {
      result = result.filter(pokemon => favorites.includes(pokemon.id));
    }
    
    // Apply sorting
    result.sort((a, b) => {
      if (sortBy === 'id') {
        return sortOrder === 'asc' 
          ? parseInt(a.id) - parseInt(b.id) 
          : parseInt(b.id) - parseInt(a.id);
      } else {
        return sortOrder === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
    });
    
    return result;
  }, [data, searchTerm, typeFilter, sortBy, sortOrder, showFavoritesOnly, favorites]);

  if (isLoading) {
    return <div className="flex justify-center py-10">Loading Pokémon...</div>;
  }

  if (error) {
    return <div className="text-red-500 py-10">Error loading Pokémon</div>;
  }

  if (filteredPokemon.length === 0) {
    return <div className="text-center py-10">No Pokémon found</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-600">
          Showing {filteredPokemon.length} Pokémon
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={() => dispatch(setViewMode('grid'))}
            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            <FiGrid />
          </button>
          <button
            onClick={() => dispatch(setViewMode('list'))}
            className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            <FiList />
          </button>
        </div>
      </div>

      <div className={viewMode === 'grid' 
        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" 
        : "space-y-4"
      }>
        {filteredPokemon.map(pokemon => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            isFavorite={favorites.includes(pokemon.id)}
            viewMode={viewMode}
            onToggleFavorite={() => dispatch(toggleFavorite(pokemon.id))}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;