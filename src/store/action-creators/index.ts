import * as WeatherTodayActionCreators from './weatherToday';
import * as WeatherFiveDaysActionCreators from './weatherFiveDays';
import * as WeatherHourlyActionCreators from './weatherHourly';

export default {
  ...WeatherTodayActionCreators,
  ...WeatherFiveDaysActionCreators,
  ...WeatherHourlyActionCreators,
};
