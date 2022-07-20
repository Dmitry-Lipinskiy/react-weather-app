import React from 'react';
import WeatherFiveDaysCards from '../components/weather/WeatherFiveDaysCards';
import WeatherHourly from '../components/weather/WeatherHourly';

const FiveDays = () => {

  return (
    <div>
      <WeatherFiveDaysCards />
      <WeatherHourly />
    </div>
  )

}

export default FiveDays;