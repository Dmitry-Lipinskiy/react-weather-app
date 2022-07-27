import {
  ErrorValueAction,
  ErrorValueActionType,
  ErrorValueState,
} from '../types/errorValue';

const initialState: ErrorValueState = {
  isError: <boolean>false,
};

export const errorValueReducer = (
  state = initialState,
  action: ErrorValueAction
): ErrorValueState => {
  switch (action.type) {
    case ErrorValueActionType.GET_ERROR_VALUE:
      return { isError: action.payload };
    default:
      return state;
  }
};
