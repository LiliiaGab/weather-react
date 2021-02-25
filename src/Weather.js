import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
function handleResponse(response) {
      console.log(response);
      setWeatherData({
        temperature:response.data.main.temp,
        humidity:response.data.main.humidity,
        feels_like:response.data.main.feels_like,
        wind: response.data.wind.speed,
      })
      setReady(true);
    }

if (ready) {
 return (
    <div className="main-information">
      <div className="local-city">
        <span className="temperature" id="temperature">
          {Math.round(weatherData.temperature)}
        </span>
        <span className="measure">
          <a href="0">°C</a> / <a href="0">°F</a>
        </span>
      </div>
      <h1>
        <span id="description">{weatherData.description}</span>
      </h1>
      <span>
        <h2 id="feels-like">Feels like: {Math.round(weatherData.feels_like)}°C</h2>
      </span>
      <p1>
        <span id="humidity">Humidity: {weatherData.humidity}%</span>
        <br />
        <span id="wind">Wind: {weatherData.wind}m/c</span>
      </p1>
    </div>
  );
} else {
      const apiKey = "ac2523706a3a3cb29b4282c1c91e736e";
        let city = "Auckland";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}
}

  

    
