import * as WeatherTodayActionCreators from "./weatherToday";
import * as WeatherFiveDeysActionCreators from "./weatherFiveDays"

export default {
  ...WeatherTodayActionCreators,
  ...WeatherFiveDeysActionCreators
}