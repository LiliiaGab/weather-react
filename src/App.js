import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="spreadsheet">
        <Weather defaultCity="Auckland" /> 
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
