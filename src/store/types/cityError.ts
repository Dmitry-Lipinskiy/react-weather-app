import { IError } from '../../components/alert/IError';

export interface CityErrorState {
  errorMessage: IError;
}

export enum CityErrorActionType {
  GET_ERROR_MESSAGE = 'GET_ERROR_MESSAGE',
}

interface GetErrorMessageAction {
  type: CityErrorActionType.GET_ERROR_MESSAGE;
  payload: IError;
}

export type CityErrorAction = GetErrorMessageAction;
