// src/components/PokemonCard/index.tsx
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleFavorite } from '../../store/slices/pokemonSlice';
import { openDetailModal } from '../../store/slices/uiSlice';
import { Pokemon } from '../../types/pokemon';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.pokemon.favorites);

  const isFavorite = favorites.includes(pokemon.id);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleFavorite(pokemon.id));
  };

  const handleViewDetails = () => {
    dispatch(openDetailModal(pokemon.id));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
      <div>
        <span className="text-gray-500 text-sm">#{pokemon.id}</span>
        <div className="flex justify-center my-2">
          <img 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${parseInt(pokemon.id)}.png`}
            alt={pokemon.name} 
            className="w-32 h-32 object-contain"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/128?text=Pokemon';
            }}
          />
        </div>
        <h3 className="text-xl font-semibold capitalize">{pokemon.name}</h3>
      </div>
      
      <div className="flex justify-between mt-4">
        <button
          onClick={handleViewDetails}
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded transition-colors"
        >
          Details
        </button>
        
        <button
          onClick={handleToggleFavorite}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
        >
          {isFavorite ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-6.485-5.621C3.763 13.107 3 11.014 3 8.868 3 5.059 5.542 2 9.5 2c2.106 0 4.154 1.096 5.5 3 1.346-1.904 3.394-3 5.5-3 3.958 0 6.5 3.059 6.5 6.868 0 2.146-.763 4.239-2.131 6.406a15.247 15.247 0 01-6.485 5.621l-.022.012-.007.003-.001.001a.752.752 0 01-.704 0l-.001-.001z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default PokemonCard;