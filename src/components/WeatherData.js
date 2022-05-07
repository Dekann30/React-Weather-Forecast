import React from 'react'

const WeatherData = (props) =>{
    return(
        //closed in a fragment so we have a parent element to not make JSX mad
        <>
            <p className="weatherCondition"><span>conditions: </span>{props.conditions}</p>,
            <p className="weatherTime"><span>time: </span>{props.time}</p>
        </>
    )
}

export default WeatherData