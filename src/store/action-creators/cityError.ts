import { Dispatch } from 'redux';
import { IError } from '../../components/alert/IError';
import http from '../../http';
import { CityErrorAction, CityErrorActionType } from '../types/cityError';

const API_KEY = '1c99c168e5f32cae7dc01015c0038525';
const lang: string = 'en';

export const getCityError = (city: any) => {
  let errorMessage = <IError>{};
  return async (dispatch: Dispatch<CityErrorAction>) => {
    const response = await http
      .get(
        `weather?q=${city}&limit=1&appid=${API_KEY}&units=metric&lang=${lang}`
      )
      .then((response) => {
        errorMessage = <IError>{};
        console.log(errorMessage);
      })
      .catch((error) => {
        errorMessage = error;
        dispatch({
          type: CityErrorActionType.GET_ERROR_MESSAGE,
          payload: errorMessage,
        });
        console.log(errorMessage);
      });
  };
};
