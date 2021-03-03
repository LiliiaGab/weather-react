import React, { useState }  from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Location(props) {
const [load, setLoad] = useState(false);
  const [locationData, setLocationData] = useState({});
function makeResponse(response) {
      console.log(response);
      setLocationData({
        city: response.data.name,
        date: new Date (response.data.dt*1000),
        description: response.data.weather[0].main,
      })
      setLoad(true);
    }

if (load) {
  return (
    <div className="location">
      <span className="current-city" id="current-city">
        <p4>{locationData.city}</p4>
      </span>
      <br />
      <p2 className="text-capitalize">
        <FormattedDate date={locationData.date} />
        {locationData.description}
      </p2>
      <div className="card-group" id="forecast"></div>
    </div>
  );
} else {
      const apiKey = "ac2523706a3a3cb29b4282c1c91e736e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(makeResponse);

    return "Loading location...";
}
}