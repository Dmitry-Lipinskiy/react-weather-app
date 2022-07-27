export interface ErrorValueState {
  isError: boolean;
}

export enum ErrorValueActionType {
  GET_ERROR_VALUE = 'GET_ERROR_VALUE',
}

interface GetErrorValueAction {
  type: ErrorValueActionType.GET_ERROR_VALUE;
  payload: boolean;
}

export type ErrorValueAction = GetErrorValueAction;
