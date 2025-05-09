// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import { PokemonProvider } from './context/PokemonContext';

const App: React.FC = () => {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon/:id" element={<DetailPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </PokemonProvider>
  );
};

export default App;