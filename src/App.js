import React from "react";
import WeatherIcon from "./WeatherIcon";
import Weather from "./Weather";
import Form from "./Form";
import Location from "./Location";
import Forecast from "./Forecast";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="spreadsheet">
        <WeatherIcon/>
        <Weather defaultCity="Auckland" />
        <Form />
        <br />
        <Location defaultCity="Auckland" />
        <Forecast />  
        </div>
      <div className="coder-details">
        <a
          href="https://github.com/LiliiaGab/weather-react.git"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code on GitHub
        </a>
        <p4> created by Liliia Gabdrakhmanova</p4>
         </div>   
         </div>
    </div>
  );
}

export default App;
