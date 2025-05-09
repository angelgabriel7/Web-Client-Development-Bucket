// src/pages/HomePage/index.tsx
import FilterPanel from '../../components/FilterPanel';
import PokemonList from '../../components/PokemonList';
import PokemonDetail from '../../components/PokemonDetail';
import { useAppSelector } from '../../store/hooks';

const HomePage = () => {
  const { isDetailModalOpen } = useAppSelector(state => state.ui);
  
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Pokédex</h1>
      
      <FilterPanel />
      <PokemonList />
      
      {isDetailModalOpen && <PokemonDetail />}
    </div>
  );
};

export default HomePage;