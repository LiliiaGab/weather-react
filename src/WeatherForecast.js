import React, {useState} from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
 const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
 setLoaded(true);
 
  }
 
  if (loaded && props.city === forecast.city.name) {
    return (
<div className="WeatherForecast row">
    <WeatherForecastPreview data={forecast.list[0]} />
    <WeatherForecastPreview data={forecast.list[1]} />
    <WeatherForecastPreview data={forecast.list[2]} />
    <WeatherForecastPreview data={forecast.list[3]} />
    <WeatherForecastPreview data={forecast.list[4]} />
    <WeatherForecastPreview data={forecast.list[5]} />
    </div> 
    );     
  } else {
    const apiKey = "ac2523706a3a3cb29b4282c1c91e736e";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}