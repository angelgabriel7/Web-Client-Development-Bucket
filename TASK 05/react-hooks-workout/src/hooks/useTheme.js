import { useState, useEffect } from 'react';

export function useTheme() {
  // Inisialisasi state dengan nilai dari localStorage atau default ke 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // Effect untuk menyimpan theme ke localStorage dan update class pada body
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  // Function untuk toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
}