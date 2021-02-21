import React from "react";

export default function Location() {
  return (
    <div className="location">
      <span className="current-city" id="current-city">
        <p4>Auckland Central</p4>
      </span>
      <br />
      <p2 id="dateCity">
        {"Last updated: Saturday 22:00"}
        <br />
        {"Cloudy"}
      </p2>
      <div className="card-group" id="forecast"></div>
    </div>
  );
}