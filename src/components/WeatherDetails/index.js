// src/components/WeatherDetails.js
import React from 'react';

function WeatherDetails({ data }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
      <div className="top text-center">
        <div className="location text-2xl font-bold">
          <p>{data.name}</p>
        </div>
        <div className="temp text-6xl font-bold">
          <h1>{data.main.temp.toFixed()}°F</h1>
        </div>
        <div className="description text-xl">
          <p>{data.weather[0].main}</p>
        </div>
      </div>
      <div className="bottom flex justify-between mt-4 text-center">
        <div className="feels w-1/3">
          <p className="bold text-2xl">{data.main.feels_like.toFixed()}°F</p>
          <p>Feels Like</p>
        </div>
        <div className="humidity w-1/3">
          <p className="bold text-2xl">{data.main.humidity}%</p>
          <p>Humidity</p>
        </div>
        <div className="wind w-1/3">
          <p className="bold text-2xl">{data.wind.speed.toFixed()} MPH</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
