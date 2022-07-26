import { Dispatch } from 'redux';
import { IListForecast } from '../../components/weather/IWeatherFiveDays';
import {
  WeatherHourlyAction,
  WeatherHourlyActionType,
} from '../types/weatherHourly';

export const showWeatherHourly = (day: any, days: IListForecast[]) => {
  const weatherHourly: any = [];
  for (let time of days) {
    if (day.dt_txt.split(' ')[0] == time.dt_txt.split(' ')[0]) {
      weatherHourly.push(time);
    }
  }
  return (dispatch: Dispatch<WeatherHourlyAction>) => {
    dispatch({
      type: WeatherHourlyActionType.GET_WEATHER_HOURLY,
      payload: weatherHourly,
    });
    console.log(weatherHourly);
  };
};
