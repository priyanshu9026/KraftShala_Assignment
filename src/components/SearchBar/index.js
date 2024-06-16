// src/components/SearchBar.js
import React, { useState } from 'react';
import axios from 'axios';

import './index.css'

function SearchBar({ setWeatherData, setError, setLoading }) {
  const [location, setLocation] = useState('');

  const API_KEY = "0ebe7a202e3340c2e345abdb00a4b0c7";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`;

  const searchLocation = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      setError('');
    } catch (error) {
      setError('Location not found. Please try again.');
    }
    setLoading(false);
    setLocation('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchLocation();
    }
  };

  return (
    <div className="search flex justify-center py-4">
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter Location"
        type="text"
        className="w-full max-w-md p-2 border border-gray-300 rounded"
      />
      <button onClick={searchLocation} className="btn ml-4 p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
