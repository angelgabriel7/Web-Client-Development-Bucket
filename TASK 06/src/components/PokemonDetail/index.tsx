// src/components/PokemonDetail/index.tsx
import React, { useState, useEffect } from 'react';
import { PokemonDetail } from '../../types/pokemon';
import { FiHeart, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { usePokemonContext } from '../../context/PokemonContext';

interface PokemonDetailComponentProps {
  pokemon: PokemonDetail;
  loading: boolean;
  error: string | null;
}

const PokemonDetailComponent: React.FC<PokemonDetailComponentProps> = ({ 
  pokemon, 
  loading, 
  error 
}) => {
  const { state, dispatch } = usePokemonContext();
  const { favorites } = state;
  
  const [activeTab, setActiveTab] = useState<'about' | 'stats' | 'evolution'>('about');
  
  const isFavorite = pokemon ? favorites.includes(pokemon.id) : false;

  const toggleFavorite = () => {
    if (pokemon) {
      dispatch({ type: 'TOGGLE_FAVORITE', payload: pokemon.id });
    }
  };

  // Type color mapping
  const typeColors: Record<string, string> = {
    normal: 'bg-gray-400',
    fire: 'bg-red-500',
    water: 'bg-blue-500',
    electric: 'bg-yellow-400',
    grass: 'bg-green-500',
    ice: 'bg-blue-300',
    fighting: 'bg-red-700',
    poison: 'bg-purple-500',
    ground: 'bg-yellow-700',
    flying: 'bg-indigo-300',
    psychic: 'bg-pink-500',
    bug: 'bg-lime-500',
    rock: 'bg-yellow-800',
    ghost: 'bg-indigo-700',
    dragon: 'bg-indigo-600',
    dark: 'bg-gray-800',
    steel: 'bg-gray-500',
    fairy: 'bg-pink-300',
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-64 text-red-500">{error}</div>;
  }

  if (!pokemon) {
    return <div className="flex justify-center items-center h-64">Pokémon not found</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="relative bg-blue-500 p-4 text-white">
        <Link to="/" className="absolute top-4 left-4 text-white">
          <FiArrowLeft size={24} />
        </Link>
        
        <div className="flex justify-between items-center mt-8">
          <div>
            <h1 className="text-2xl font-bold capitalize">{pokemon.name}</h1>
            <p>#{pokemon.id.toString().padStart(3, '0')}</p>
          </div>
          
          <button
            onClick={toggleFavorite}
            className="p-2 rounded-full bg-white/20"
          >
            <FiHeart 
              className={isFavorite ? 'text-red-500 fill-red-500' : 'text-white'} 
              size={24} 
            />
          </button>
        </div>
      </div>
      
      {/* Pokemon Image */}
      <div className="p-4 flex justify-center">
        <img 
          src={pokemon.image} 
          alt={pokemon.name} 
          className="w-64 h-64 object-contain"
        />
      </div>
      
      {/* Type Tags */}
      <div className="px-4 pb-4 flex gap-2 justify-center">
        {pokemon.types.map(type => (
          <span 
            key={type} 
            className={`${typeColors[type] || 'bg-gray-400'} text-white px-3 py-1 rounded-full capitalize`}
          >
            {type}
          </span>
        ))}
      </div>
      
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex">
          <button
            className={`flex-1 py-2 px-4 ${activeTab === 'about' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
          <button
            className={`flex-1 py-2 px-4 ${activeTab === 'stats' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('stats')}
          >
            Stats
          </button>
          <button
            className={`flex-1 py-2 px-4 ${activeTab === 'evolution' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('evolution')}
          >
            Evolution
          </button>
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="p-4">
        {activeTab === 'about' && (
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-gray-500">Height</h3>
                <p>{pokemon.height} m</p>
              </div>
              <div>
                <h3 className="text-gray-500">Weight</h3>
                <p>{pokemon.weight} kg</p>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-gray-500 mb-1">Abilities</h3>
              <div className="flex flex-wrap gap-2">
                {pokemon.abilities.map(ability => (
                  <span 
                    key={ability} 
                    className="bg-gray-100 px-3 py-1 rounded-full capitalize"
                  >
                    {ability.replace('-', ' ')}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'stats' && (
          <div className="space-y-4">
            {pokemon.stats.map(stat => (
              <div key={stat.name}>
                <div className="flex justify-between">
                  <span className="text-gray-500 capitalize">{stat.name.replace('-', ' ')}</span>
                  <span>{stat.value}</span>
                </div>
                <div className="mt-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${Math.min(100, (stat.value / 255) * 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'evolution' && (
          <div className="flex items-center justify-center h-32 text-gray-500">
            Evolution data not available
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonDetailComponent;