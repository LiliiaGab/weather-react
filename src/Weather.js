import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
function handleResponse(response) {
      console.log(response);
      setWeatherData({
        temperature:response.data.main.temp,
        humidity:response.data.main.humidity,
        feels_like:response.data.main.feels_like,
        wind: response.data.wind.speed,
        city: response.data.name,
        date: new Date (response.data.dt*1000),
        description: response.data.weather[0].main,
        iconUrl:"https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
      })
      setReady(true);
    }

if (ready) {
 return (
   <div>
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
    <div className="current-weather">
      <img
        src={weatherData.iconUrl}
        alt="weather"
        id="icon"
      />
    </div>
    <div className="findcity">
      <form>
        <div classname="row">
        <div className="col-6">
        <input
          type="searchCity"
          id="search-text-input"
          placeholder="Search a city"
          autocomplete="off"
          autofocus="on"
          />
        <input type="submit" value="Search" className="btn btn-light" />
        <input
          type="submit"
          value="Current"
          id="current"
          className="btn btn-light"
        />
        </div>
        </div>
      </form> 
      </div>
      <br />
       <div className="location">
      <span className="current-city" id="current-city">
        <p4>{weatherData.city}</p4>
      </span>
      <br />
      <p2 className="text-capitalize">
        <FormattedDate date={weatherData.date} />
        {weatherData.description}
      </p2>
      <div className="card-group" id="forecast"></div>
    </div>
   </div>
  );
} else {
      const apiKey = "ac2523706a3a3cb29b4282c1c91e736e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}
}

  

    
