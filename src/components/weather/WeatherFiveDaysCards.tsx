import React from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelectors';
import './weatherFiveDaysCards.css'

const WeatherFiveDaysCards = () => {

  const {days} = useTypedSelector(state => state.days);

  // const showWeatherFiveDays = (days: any) => {
  //   let fiveDaysInfo = [];
  //   fiveDaysInfo.push(days[0]);
  //   for (let i = 1; i < days.length; i++) {
  //     if (days[i].dt_txt.includes("15:00:00") && days[0].dt_txt.split(" ")[0] !== days[i].dt_txt.split(" ")[0]) {
  //       days.push(days[i]);
  //     }
  //   }
  //   if (fiveDaysInfo.length > 5) {
  //     fiveDaysInfo.shift();
  //   }
  //   console.log(fiveDaysInfo);
  // }

  // showWeatherFiveDays(days);

  const weatherIcon = (icon: string) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  return (
    <>
      <div className="forecast-container">
        {days.length &&
          days.map((day) => (
            <div className="forecast-block"key={day.dt_txt}>
              {/* <div className="forecast-week-day">{dayDate(day.dt) | date: "EEEE"}</div>
              <div className="forecast-date">{dayDate(day.dt) | date: "LLL dd"}</div> */}
              <div className="forecast-image"><img src={weatherIcon(day.weather[0].icon)} alt=""/></div>
              <div className="forecast-temperature">{Math.round(day.main.temp)}<sup>o</sup>C</div>
              <div className="forecast-description">{day.weather[0].description}</div>
            </div>
          ))}
      </div>
    </>
  )
}

export default WeatherFiveDaysCards;