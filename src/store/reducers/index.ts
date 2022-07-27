import { combineReducers } from 'redux';
import { cityErrorReducer } from './cityErrorReducer';
import { weatherFiveDaysReducer } from './weatherFiveDaysReducer';
import { weatherHourlyReducer } from './weatherHourlyReducer';
import { weatherTodayReducer } from './weatherTodayReducer';
import { errorValueReducer } from './errorValueReducer';

export const rootReducer = combineReducers({
  today: weatherTodayReducer,
  days: weatherFiveDaysReducer,
  weatherHourly: weatherHourlyReducer,
  errorMessage: cityErrorReducer,
  isError: errorValueReducer, 
});

export type RootState = ReturnType<typeof rootReducer>;
