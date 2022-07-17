import { Dispatch } from "redux";
import { setConstantValue } from "typescript";
import http from "../../http";
import { WeatherTodayAction, WeatherTodayActionType } from "../types/weatherToday";

const API_KEY = "1c99c168e5f32cae7dc01015c0038525";
const lang: string = "en";

export const getWeatherToday = (city: any) => {
  return async (dispatch: Dispatch<WeatherTodayAction>) => {
    const response = await http.get(`weather?q=${city}&limit=1&appid=${API_KEY}&units=metric&lang=${lang}`);
    dispatch({type: WeatherTodayActionType.GET_WEATHER_TODAY, payload: response.data})
    console.log(response.data);
  }
}