import React from "react";

export default function Weather() {
     return (
    <div className="main-information">
      <div className="local-city">
        <span className="temperature" id="temperature">
          16
        </span>
        <span className="measure">
          <a href="0">°C</a> / <a href="0">°F</a>
        </span>
      </div>
      <h1>
        <span id="description">Cloudy</span>
      </h1>
      <span>
        <h2 id="feels-like">Feels like: 12°C</h2>
      </span>
      <p1>
        <span id="humidity">Humidity: 72%</span>
        <br />
        <span id="wind">Wind: 6.69m/c</span>
      </p1>
    </div>
  );
}