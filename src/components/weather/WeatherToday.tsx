import moment from 'moment';
import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelectors';
import Spinner from '../spinner/Spinner';
import './weatherToday.css';

const WeatherToday = () => {

  const {today} = useTypedSelector(state => state.today);

  const weatherIcon = (icon: string) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  return (
    <>
      {today?.weather ? 
        <div className="weather-today-container">
          <div className="weather-today-container-header">
            <div>CURRENT WEATHER</div>
            <div>{moment(today.dt * 1000).format('DD.MM.YYYY')}</div>
          </div>
          <div className="weather-today-container-info">
            <div>
              <img src={weatherIcon(today.weather[0].icon)} alt=""/>
              <div>{today.weather[0].description}</div>
            </div>
            <div>
              <div className="info-air-temperature">{Math.round(today.main.temp)}<sup>o</sup>C</div>
              <div>Real Feel {Math.round(today.main.feels_like)}<sup>o</sup></div>
            </div>
              <div>
                <table>
                  <tbody>
                  <tr>
                    <th scope='row'>Sunrise:</th>
                    <td>{moment(today.sys.sunrise * 1000).format('HH:mm')}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Sunset:</th>
                    <td>{moment(today.sys.sunset * 1000).format('HH:mm')}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Duration:</th>
                    <td>{moment((today.sys.sunset * 1000 - today.sys.sunrise * 1000) - 3 * 3600 * 1000).format('HH:mm')} hr</td>
                  </tr>
                  </tbody>
                </table> 
              </div>
          </div>
        </div>
        :
        <Spinner/>
      }
    </>
  )

}

export default WeatherToday;