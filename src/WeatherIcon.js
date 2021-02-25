import React, { useState }  from "react";
import axios from "axios";

export default function Location() {
  const [search, setSearch] = useState(false);
  const [iconData, setIconData] = useState({});
function iconResponse(response) {
      console.log(response);
      setIconData({
        iconUrl:"https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
      })
      setSearch(true);
    }
  
   if (search) {
  return (
    <div className="current-weather">
      <img
        src={iconData.iconUrl}
        alt="weather"
        id="icon"
      />
    </div>
  );
} else {
      const apiKey = "ac2523706a3a3cb29b4282c1c91e736e";
      let city="Auckland";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(iconResponse);

    return "Loading...";
}
}