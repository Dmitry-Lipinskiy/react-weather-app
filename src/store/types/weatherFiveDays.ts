import { IWeatherFiveDays } from "../../components/weather/IWeatherFiveDays";

export interface WeatherFiveDaysState {
  days: IWeatherFiveDays;
}

export enum WeatherFiveDaysActionType {
  GET_WEATHER_FIVE_DAYS = 'GET_WEATHER_FIVE_DAYS'
}

interface GetWeatherFiveDaysAction {
  type: WeatherFiveDaysActionType.GET_WEATHER_FIVE_DAYS;
  payload: IWeatherFiveDays;
}

export type WeatherFiveDaysAction = GetWeatherFiveDaysAction;