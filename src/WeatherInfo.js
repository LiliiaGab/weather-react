import React, { useState }  from "react";
import axios from "axios";

export default function WeatherInfo(props) {
const [placeData, setPlaceData] = useState({ready: false});
const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setPlaceData({
        ready: true,
        temperature:response.data.main.temp,
        humidity:response.data.main.humidity,
        feels_like:response.data.main.feels_like,
        wind: response.data.wind.speed,
        city: response.data.name,
        date: new Date (response.data.dt*1000),
        description: response.data.weather[0].main,
        iconUrl:"https://ssl.gstatic.com/onebox/weather/64/rain_light.png",

      })
    }

    function seacrh() {
    const apiKey = "ac2523706a3a3cb29b4282c1c91e736e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
      event.preventDefault();
      seacrh();
    }

    function handleCityChange(event) {
      setCity(event.target.value);
    }
         
 if (placeData.ready){
return (
    <div className="findcity">
      <form onSubmit={handleSubmit}>
        <div classname="row">
        <div className="col-6">
        <input
          type="searchCity"
          id="search-text-input"
          placeholder="Search a city"
          autocomplete="off"
          autofocus="on"
          onChange={handleCityChange}
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
  );
  } else { 
    seacrh();
    return "Info Loading...";
}
  
}

