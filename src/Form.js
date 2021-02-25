import React, { useState }  from "react";
import axios from "axios";

export default function Form() {
const [place, setPlace] = useState(false);
      function handleResponse(response) {
        console.log(response)
        setPlace(true);
    }
     
  if (place){
return (
    <div className="findcity">
      <form id="seacrh-form">
        <div classname="row">
        <div className="col-6">
        <input
          type="searchCity"
          id="search-text-input"
          placeholder="Search a city"
          autocomplete="off"
          autofocus="on"/>
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
      const apiKey = "ac2523706a3a3cb29b4282c1c91e736e";
      let city = "Auckland";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}
}
  

  
