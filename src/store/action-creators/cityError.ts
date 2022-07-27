import { Dispatch } from 'redux';
import http from '../../http';
import { CityErrorAction, CityErrorActionType } from '../types/cityError';

const API_KEY = '1c99c168e5f32cae7dc01015c0038525';
const lang: string = 'en';

export const getCityError = (city: any) => {
  let errorMessage = {};
  return async (dispatch: Dispatch<CityErrorAction>) => {
    const response = await http
      .get(
        `weather?q=${city}&limit=1&appid=${API_KEY}&units=metric&lang=${lang}`
      )
      .then((response) => {
        errorMessage = {};
        console.log(errorMessage);
      })
      .catch((error) => {
        errorMessage = error.response.data;
        console.log(errorMessage);
      });
    dispatch({
      type: CityErrorActionType.GET_ERROR_MESSAGE,
      payload: errorMessage,
    });
  };
};
