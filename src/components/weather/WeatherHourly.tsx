import moment from 'moment';
import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelectors';
import './weatherHourly.css';

const WeatherHourly = () => {
  const { weatherHourly } = useTypedSelector((state) => state.weatherHourly);

  const weatherIcon = (icon: string) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  };

  return (
    <div className="container-weather-hourly">
      <div className="container-weather-hourly-info">
        {weatherHourly?.[0] && (
          <div className="block-weather-hourly-info-name">
            <div>
              {moment(weatherHourly[0].dt * 1000 - 3 * 3600 * 1000).format('dddd')}
            </div>
            <img
              className="zero-image"
              src={weatherIcon(weatherHourly[0].weather[0].icon)}
              alt=""
            />
            <div>Forecast</div>
            <div>
              Temp (<sup>o</sup>C)
            </div>
            <div>RealFeel</div>
            <div>Wind (km/h)</div>
          </div>
        )}
        {weatherHourly.length ? (
          weatherHourly.map((time) => (
            <div className="block-weather-hourly-info" key={time.dt}>
              <div>
                {moment(time.dt * 1000 - 3 * 3600 * 1000).format('HH:mm')}
              </div>
              <div>
                <img src={weatherIcon(time.weather[0].icon)} alt="" />
              </div>
              <div>{time.weather[0].description}</div>
              <div>
                {Math.round(time.main.temp)}
                <sup>o</sup>
              </div>
              <div>
                {Math.round(time.main.feels_like)}
                <sup>o</sup>
              </div>
              <div>{Math.round((time.wind.speed * 3600) / 1000)}</div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default WeatherHourly;
