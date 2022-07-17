import { combineReducers } from "redux";
import { weatherTodayReducer } from "./weatherTodayReducer";

export const rootReducer = combineReducers({
  today: weatherTodayReducer,
});

export type RootState = ReturnType<typeof rootReducer>