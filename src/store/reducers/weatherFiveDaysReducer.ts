import { IWeatherFiveDays } from "../../components/weather/IWeatherFiveDays";
import { WeatherFiveDaysAction, WeatherFiveDaysActionType, WeatherFiveDaysState } from "../types/weatherFiveDays";

const initialState: WeatherFiveDaysState = {
  days: <IWeatherFiveDays>{}
}

export const weatherFiveDaysReducer = (state = initialState, action: WeatherFiveDaysAction): WeatherFiveDaysState => {
  switch (action.type) {
    case WeatherFiveDaysActionType.GET_WEATHER_FIVE_DAYS:
      return {days: action.payload}
    default: 
      return state;
  }
};