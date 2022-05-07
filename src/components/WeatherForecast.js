import React from 'react'
import WeatherData from './WeatherData'
import WeatherIcon from './WeatherIcon'

const WeatherForecast = (props) => {
    console.log(WeatherForecast)
    return (
        <div class='weather'>
            <WeatherIcon img={props.img}/>
            <WeatherData conditions={props.conditions} time={props.time} />
        </div>
    )
}

export default WeatherForecast