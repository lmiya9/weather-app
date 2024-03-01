import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [description, setDescription] = useState("");
  const [weather, setWeather] = useState("");
  // eslint-disable-next-line
  const [icon, setIcon] = useState("");

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setDescription(response.data.weather[0].description);
    setIcon(response.data.weather[0].icon);

    const iconURL = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

    setWeather(
      <ul>
        <li>City: {city}</li>
        <li>Temperature: {temperature}°C</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {wind} km/h</li>
        <li>
          <img src={iconURL} alt="Weather Icon" />
        </li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "6782253072f7d90462731a624097fc54";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiURL).then(showTemperature);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
    );
  }

  return (
    <div className="SearchEngine">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type in a city"
          autoFocus
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <br />
      {weather}
    </div>
  );
}
