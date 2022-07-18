import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelectors';
import './weatherToday.css';

const WeatherToday = () => {

  const {today} = useTypedSelector(state => state.today);

  const weatherIcon = (icon: string) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  // const todayDate = (date: any) => {
  //   return new Date(date * 1000);
  // }

  return (
    <div className="weather-today-container">
      <div className="weather-today-container-header">
        <div>CURRENT WEATHER</div>
        <div>{(today.dt)}</div>
      </div>
      <div className="weather-today-container-info">
        {/* <div>
          <img src={weatherIcon(today.weather[0].icon)} alt=""/>
          <div>{today.weather[0].description}</div>
        </div>
        <div>
          <div className="info-air-temperature">{Math.round(today.main.temp)}<sup>o</sup>C</div>
          <div>Real Feel {Math.round(today.main.feels_like)}<sup>o</sup></div>
        </div> */}
          <div>
            <table>
              <tbody>
              {/* <tr>
                <th scope='row'>Sunrise:</th>
                <td>{todayDate(today.sys.sunrise) | date: "HH:mm"}</td>
              </tr>
              <tr>
                <th scope='row'>Sunset:</th>
                <td>{todayDate(today.sys.sunset) | date: "HH:mm"}</td>
              </tr>
              <tr>
                <th scope='row'>Duration:</th>
                <td>{todayDuration(today.sys.sunset, today.sys.sunrise) | date: "HH:mm"} hr</td>
              </tr> */}
              </tbody>
            </table> 
          </div>
      </div>
    </div>
  )

}

export default WeatherToday;