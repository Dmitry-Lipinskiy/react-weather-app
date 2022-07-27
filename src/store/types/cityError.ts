export interface CityErrorState {
  errorMessage: {};
}

export enum CityErrorActionType {
  GET_ERROR_MESSAGE = 'GET_ERROR_MESSAGE',
}

interface GetErrorMessageAction {
  type: CityErrorActionType.GET_ERROR_MESSAGE;
  payload: {};
}

export type CityErrorAction = GetErrorMessageAction;
