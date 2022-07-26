import React, { useState } from 'react';
import ModalWeatherHourly from '../components/modal/ModalWeatherHourly';
import WeatherFiveDaysCards from '../components/weather/WeatherFiveDaysCards';

const FiveDays = () => {
  const [openWeatherHourlyModal, setOpenWeatherHourlyModal] = useState(false);

  return (
    <div>
      <WeatherFiveDaysCards
        setOpenWeatherHourlyModal={setOpenWeatherHourlyModal}
      />
      <ModalWeatherHourly
        openWeatherHourlyModal={openWeatherHourlyModal}
        setOpenWeatherHourlyModal={setOpenWeatherHourlyModal}
      />
    </div>
  );
};

export default FiveDays;
