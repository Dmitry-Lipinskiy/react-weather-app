import { Dispatch } from 'redux';
import http from '../../http';
import { ErrorValueAction, ErrorValueActionType } from '../types/errorValue';

const API_KEY = '1c99c168e5f32cae7dc01015c0038525';
const lang: string = 'en';

export const getErrorValue = (city: any) => {
  let isError: boolean = false;
  return async (dispatch: Dispatch<ErrorValueAction>) => {
    const response = await http
      .get(
        `weather?q=${city}&limit=1&appid=${API_KEY}&units=metric&lang=${lang}`
      )
      .then((response) => {
        isError = false;
        console.log(isError);
      })
      .catch((error) => {
        isError = true;
        console.log(isError);
      });
    dispatch({
      type: ErrorValueActionType.GET_ERROR_VALUE,
      payload: isError,
    });
    setTimeout(() => {
      dispatch({
        type: ErrorValueActionType.GET_ERROR_VALUE,
        payload: false,
      });
    }, 2500);
  };
};
