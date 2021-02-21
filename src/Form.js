import React from "react";

export default function Form() {
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