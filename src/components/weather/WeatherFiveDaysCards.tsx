import moment from 'moment';
import React, { Dispatch, SetStateAction } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelectors';
import Spinner from '../spinner/Spinner';
import './weatherFiveDaysCards.css';

const WeatherFiveDaysCards = ({
  setOpenWeatherHourlyModal,
}: {
  setOpenWeatherHourlyModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const { showWeatherHourly } = useActions();
  const { days } = useTypedSelector((state) => state.days);

  const showWeatherFiveDays = (days: any) => {
    const fiveDaysInfo = [];
    fiveDaysInfo.push(days[0]);
    for (let i = 0; i < days.length; i++) {
      if (
        days[i].dt_txt.includes('15:00:00') &&
        days[0].dt_txt.split(' ')[0] !== days[i].dt_txt.split(' ')[0]
      ) {
        fiveDaysInfo.push(days[i]);
      }
    }
    if (fiveDaysInfo.length > 5) {
      fiveDaysInfo.pop();
    }
    // console.log(fiveDaysInfo);
    return fiveDaysInfo;
  };

  const weatherIcon = (icon: string) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  };

  return (
    <>
      <div className="forecast-container">
        {days.length ? (
          showWeatherFiveDays(days).map((day) => (
            <div
              className="forecast-block"
              key={day.dt}
              onClick={() => (
                showWeatherHourly(day, days), setOpenWeatherHourlyModal(true)
              )}
            >
              <div className="forecast-week-day">
                {moment(day.dt * 1000 - 3 * 3600 * 1000).format('dddd')}
              </div>
              <div className="forecast-date">
                {moment(day.dt * 1000 - 3 * 3600 * 1000).format('MMM DD')}
              </div>
              <div className="forecast-image">
                <img src={weatherIcon(day.weather[0].icon)} alt="" />
              </div>
              <div className="forecast-temperature">
                {Math.round(day.main.temp)}
                <sup>o</sup>C
              </div>
              <div className="forecast-description">
                {day.weather[0].description}
              </div>
            </div>
          ))
        ) : (
          <div className="weather-five-days-spinner">
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherFiveDaysCards;
