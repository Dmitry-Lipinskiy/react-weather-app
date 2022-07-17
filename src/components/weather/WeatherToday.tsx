import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelectors';
import './weatherToday.css';

let city: any = "Minsk";

const WeatherToday = () => {

  const {today} = useTypedSelector(state => state.today);
  const {getWeatherToday} = useActions();

  useEffect(() => {
    getWeatherToday(city);
  }, []);

  return (
    <div className="weather-today-container">
      <div className="weather-today-container-header">
        <div>CURRENT WEATHER</div>
        {/* <div>{todayDate(today.dt) | date: "dd.MM.yyyy"}</div> */}
      </div>
      <div className="weather-today-container-info">
        <div>
          {/* <img src={today.weather[0].icon} alt=""> */}
          {/* <div>{today.weather[0].description}.</div> */}
        </div>
        <div>
          {/* <div className="info-air-temperature">{today.main.temp}<sup>o</sup>C</div> */}
          {/* <div>Real Feel {today.main.feels_like}<sup>o</sup></div> */}
        </div>
          <div>
            {/* <table> */}
              {/* <tr> */}
                {/* <td>Sunrise:</td> */}
                {/* <td>{todayDate(today.sys.sunrise) | date: "HH:mm"}</td> */}
              {/* </tr> */}
              {/* <tr> */}
                {/* <td>Sunset:</td> */}
                {/* <td>{todayDate(today.sys.sunset) | date: "HH:mm"}</td> */}
              {/* </tr> */}
              {/* <tr> */}
                {/* <td>Duration:</td> */}
                {/* <td>{todayDuration(today.sys.sunset, today.sys.sunrise) | date: "HH:mm"} hr</td> */}
              {/* </tr> */}
            {/* </table> */}
          </div>
      </div>
    </div>
  )

}

export default WeatherToday;