import { useState, useEffect } from 'react';

export function useWindowSize() {
  // State untuk ukuran window
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth < 768
  });

  useEffect(() => {
    // Handler untuk window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 768
      });
    }

    // Menambahkan event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener pada unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}