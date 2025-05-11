// src/components/PokemonList/index.tsx
import { useGetPokemonListQuery } from '../../store/api/pokemonApi';
import PokemonCard from '../PokemonCard';

const PokemonList = () => {
  const { data, error, isLoading } = useGetPokemonListQuery(20); // Mengambil 20 Pokémon

  // Tampilkan indikator loading
  if (isLoading) {
    return <div className="text-center py-8">Loading Pokémon...</div>;
  }

  // Tampilkan pesan error
  if (error) {
    return <div className="text-center py-8 text-red-500">Error loading Pokémon. Please try again.</div>;
  }

  // Periksa dulu apakah data ada dan memiliki results
  if (!data || !Array.isArray(data)) {
    return <div className="text-center py-8">No Pokémon data available.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      {data.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;