import { combineReducers } from "redux";
import { weatherFiveDaysReducer } from "./weatherFiveDaysReducer";
import { weatherTodayReducer } from "./weatherTodayReducer";

export const rootReducer = combineReducers({
  today: weatherTodayReducer,
  days: weatherFiveDaysReducer
});

export type RootState = ReturnType<typeof rootReducer>