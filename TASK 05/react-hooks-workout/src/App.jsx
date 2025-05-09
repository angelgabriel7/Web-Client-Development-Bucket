import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import './index.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state for demo
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className={`app ${theme}`}>
      <div className="page">
        <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
        <Hero />
        <Footer />
      </div>
      <img id="balls" src="./imgs/balls.svg" alt="decorative balls on the bottom left of the page" />
    </div>
  );
}

export default App;