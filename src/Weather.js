import React from "react";
import axios from "axios";

export default function Weather() {
    function handleResponse(response) {
        alert(`the weather in Auckland is ${response.data.main.temp} C`)
    }
        let apiKey = "ac2523706a3a3cb29b4282c1c91e736e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Auckland&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return <h2>Hello from Weather</h2>;
}