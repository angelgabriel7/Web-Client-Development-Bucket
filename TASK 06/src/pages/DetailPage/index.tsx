// src/pages/DetailPage/index.tsx
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PokemonDetailComponent from '../../components/PokemonDetail';
import { usePokemonDetail } from '../../hooks/usePokemonDetail';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Use our custom hook to fetch pokemon details
  const { pokemon, loading, error } = usePokemonDetail(Number(id));
  
  // If ID is invalid, redirect to home page
  useEffect(() => {
    if (id && isNaN(Number(id))) {
      navigate('/');
    }
  }, [id, navigate]);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <PokemonDetailComponent
        pokemon={pokemon!}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default DetailPage;