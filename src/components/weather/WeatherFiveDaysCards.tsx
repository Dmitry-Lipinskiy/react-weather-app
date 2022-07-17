import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelectors';
import './WeatherFiveDaysCards.css'

const WeatherFiveDaysCards = () => {

  const {days} = useTypedSelector(state => state.days);

  return (
    <div className="forecast-container">
      {/* {days.length && */}
        {/* days.map((day) => ( */}
          {/* <div className="forecast-block" key={day.id}> */}
            {/* <div className="forecast-week-day">{dayDate(day.dt) | date: "EEEE"}</div> */}
            {/* <div className="forecast-date">{dayDate(day.dt) | date: "LLL dd"}</div> */}
            {/* <div className="forecast-image"><img src={weatherIcon(day.weather[0].icon)} alt=""></div> */}
            {/* <div className="forecast-temperature">{airTemperature(day.main.temp)}<sup>o</sup>C</div> */}
            {/* <div className="forecast-description">{day.weather[0].description}</div> */}
          {/* </div> */}
        
    </div>
  )
}

export default WeatherFiveDaysCards;