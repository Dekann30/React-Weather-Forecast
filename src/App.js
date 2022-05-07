import React from "react";
import "./styles.css";
import WeatherData from "./WeatherData";
import WeatherForecast from "./components/WeatherForecast";

export default function App() {
  console.log(WeatherData)
  const allWeatherData = WeatherData.map((ele, index)=>{
      return (
      <WeatherForecast
      img={ele.img}
      conditions={ele.conditions} time={ele.time} key={index} 
      //{...ele}
      />)
    })
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      <section>{allWeatherData}</section>
    </div>
  );
}
