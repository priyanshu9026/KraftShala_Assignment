// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherDetails from './components/WeatherDetails';
import DateTime from './components/DateTime';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import Error from './components/Error';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light'); 
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <SearchBar setWeatherData={setWeatherData} setError={setError} setLoading={setLoading} />
      {error && <Error message={error} />}
      {loading && <LoadingSpinner />}
      {weatherData.name && <DateTime />}
      {weatherData.name && <WeatherDetails data={weatherData} />}
      <Footer />
    </div>
  );
}

export default App;
