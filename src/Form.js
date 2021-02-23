import React from "react";
import axios from "axios";

export default function Form() {
      function handleResponse(response) {
      console.log(response);
    }
        let apiKey = "ac2523706a3a3cb29b4282c1c91e736e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Auckland&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

  return (
    <div className="col-6">
      <form id="seacrh-form">
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
      </form>
    </div>
  );
}