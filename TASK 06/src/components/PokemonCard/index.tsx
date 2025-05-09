// src/components/PokemonCard/index.tsx
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { openDetailModal } from '../../store/slices/uiSlice';
import { addToRecentlyViewed } from '../../store/slices/pokemonSlice';
import { FiHeart } from 'react-icons/fi';
import { Pokemon } from '../../types/pokemon';

interface PokemonCardProps {
  pokemon: Pokemon;
  isFavorite: boolean;
  viewMode: 'grid' | 'list';
  onToggleFavorite: () => void;
}

const PokemonCard = ({ pokemon, isFavorite, viewMode, onToggleFavorite }: PokemonCardProps) => {
  const dispatch = useAppDispatch();
  
  const handleViewDetails = () => {
    dispatch(addToRecentlyViewed(pokemon.id));
    dispatch(openDetailModal(pokemon.id));
  };
  
  if (viewMode === 'grid') {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:scale-105">
        <div className="relative">
          <img 
            src={pokemon.imageUrl} 
            alt={pokemon.name}
            className="w-full h-48 object-contain p-2"
            loading="lazy"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggleFavorite();
            }}
            className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            <FiHeart 
              size={20} 
              className={isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'} 
            />
          </button>
        </div>
        
        <div className="p-4">
          <p className="text-gray-500 text-sm">#{pokemon.id.padStart(3, '0')}</p>
          <h3 className="font-semibold text-lg capitalize">{pokemon.name}</h3>
          
          <button
            onClick={handleViewDetails}
            className="mt-2 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            View Details
          </button>
        </div>
      </div>
    );
  }
  
  // List view
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg">
      <div className="flex items-center p-3">
        <img 
          src={pokemon.imageUrl} 
          alt={pokemon.name}
          className="w-20 h-20 object-contain mr-4"
          loading="lazy"
        />
        
        <div className="flex-1">
          <p className="text-gray-500 text-sm">#{pokemon.id.padStart(3, '0')}</p>
          <h3 className="font-semibold text-lg capitalize">{pokemon.name}</h3>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={handleViewDetails}
            className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Details
          </button>
          
          <button
            onClick={onToggleFavorite}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            <FiHeart 
              size={20} 
              className={isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'} 
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;