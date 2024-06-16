import React from 'react';
import ThemeToggle from '../ThemeToggle';
import './index.css'

function Header({ theme, toggleTheme }) {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="heading text-2xl font-bold">Weather App</h1>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </header>
  );
}

export default Header;
