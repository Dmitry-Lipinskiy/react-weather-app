import {
  CityErrorAction,
  CityErrorActionType,
  CityErrorState,
} from '../types/cityError';

const initialState: CityErrorState = {
  errorMessage: <any>{},
};

export const cityErrorReducer = (
  state = initialState,
  action: CityErrorAction
): CityErrorState => {
  switch (action.type) {
    case CityErrorActionType.GET_ERROR_MESSAGE:
      return { errorMessage: action.payload };
    default:
      return state;
  }
};
