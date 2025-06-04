import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import leafImage from '../assets/leaf.png';


//test new commit
// Test commit for GitHub email fix
//new
//new 2 - error handle

const api_key = "0cc86d16bf572f78cdc96c096c7627e5";
const api_Endpoint = "https://api.openweathermap.org/data/2.5/weather";

const WeatherDisplay = () => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await axios.get(api_Endpoint, {
            params: {
              lat: latitude,
              lon: longitude,
              units: 'metric',
              appid: api_key,
            },
          });
          setWeather(response.data);
        } catch (err) {
          console.error(err);
          setError("Failed to fetch weather data");
        } finally {
          setLoading(false);
        }
      }, 
      () => {
        console.error("Geolocation error:", error);
        setError("Unable to retrieve your location");
        setLoading(false);
      }
    );
  }, []);

  if (loading) return <div>Loading weather...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-2 rounded-lg bg-blue-100 text-blue-900 shadow-md max-w-xs mt-2">
      <h2 className="text-lg font-semibold mb-1">Weather in {weather.name}</h2>
      <p className='weathertext'>🌡 Temperature: {weather.main.temp} °C</p>
      <p className='weathertext'>💧 Humidity: {weather.main.humidity}%</p>
      <p className="weathertext">☁️ Condition: {weather.weather[0].description}</p>
      <img src={leafImage} alt="Leaf" className="leafy" style={{ width: "120px", height: "120px", display: "block", margin: "0 auto" }}/>
    </div>
  );
};

/*
style={{ width: "120px", height: "120px", display: "block", margin: "0 auto" }}
*/

export default WeatherDisplay;
