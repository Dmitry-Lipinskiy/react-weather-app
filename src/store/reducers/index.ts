import { combineReducers } from "redux";
import { weatherFiveDaysReducer } from "./weatherFiveDaysReducer";
import { weatherHourlyReducer } from "./weatherHourlyReducer";
import { weatherTodayReducer } from "./weatherTodayReducer";

export const rootReducer = combineReducers({
  today: weatherTodayReducer,
  days: weatherFiveDaysReducer,
  weatherHourly: weatherHourlyReducer
});

export type RootState = ReturnType<typeof rootReducer>