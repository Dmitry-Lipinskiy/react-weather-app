import { Dispatch } from "redux";
import http from "../../http";
import { WeatherFiveDaysAction, WeatherFiveDaysActionType } from "../types/weatherFiveDays";

const API_KEY = "1c99c168e5f32cae7dc01015c0038525";
const lang: string = "en";

export const getWeatherFiveDays = (city: any) => {
  return async (dispatch: Dispatch<WeatherFiveDaysAction>) => {
    const response = await http.get(`forecast?q=${city}&appid=${API_KEY}&units=metric&lang=${lang}`);
    dispatch({type: WeatherFiveDaysActionType.GET_WEATHER_FIVE_DAYS, payload: response.data})
    console.log(response.data);
  }
}