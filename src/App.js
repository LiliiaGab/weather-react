import React from "react";
import WeatherIcon from "./WeatherIcon";
import Weather from "./Weather";
import Form from "./Form";
import Location from "./Location";
import './App.css';

function App() {
  return (
    <div className="App">
        <div class="container">
        <WeatherIcon />
        <Weather />
        <Form />
        <br />
        <Location />
      </div>
      <div className="coder-details">
        <a
          href="https://github.com/LiliiaGab/weather-react.git"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        <p4>by Liliia Gabdrakhmanova</p4>
      </div>
    </div>
  );
}

export default App;
