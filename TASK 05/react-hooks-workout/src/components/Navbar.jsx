import { useState, useEffect } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

function Navbar({ toggleTheme, currentTheme }) {
  const { isMobile } = useWindowSize();
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Close menu when switching from mobile to desktop
  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile]);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav>
      <a id="logo" href="#">
        <img src="./imgs/logo.svg" alt="workoutaja logo" />
      </a>
      
      {isMobile ? (
        <>
          <button className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? 'Close' : 'Menu'}
          </button>
          
          {menuOpen && (
            <ul className="mobile-menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Training</a></li>
              <li>
                <button className="theme-toggle" onClick={toggleTheme}>
                  {currentTheme === 'light' ? '🌙' : '☀️'}
                </button>
              </li>
            </ul>
          )}
        </>
      ) : (
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Training</a></li>
          <li>
            <button className="theme-toggle" onClick={toggleTheme}>
              {currentTheme === 'light' ? '🌙' : '☀️'}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;