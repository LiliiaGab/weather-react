import React, {useState} from "react";


export default function WeatherTemperature(weatherData) {
    const [unit, setUnit] = useState("celsius");
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === "celsius") {
    return (
        <div>
        <span className="temperature">
          {Math.round(weatherData.celsius)}
        </span>
        <span className="measure">
        °C / {" "} <a href="/" onClick={convertToFahrenheit}>°F</a>
        </span>
        </div>
    ); 
    } else {
        let fahrenheitTemperature = (weatherData.celsius * 9) / 5 + 32;
         return (
        <div>
        <span className="temperature">
          {Math.round(fahrenheitTemperature)}
        </span>
        <span className="measure">
        <a href="/" onClick={convertToCelsius}>°C </a> {" "}/ °F
        </span>
        </div>
         );
    }
   
}