import * as WeatherTodayActionCreators from './weatherToday';
import * as WeatherFiveDaysActionCreators from './weatherFiveDays';
import * as WeatherHourlyActionCreators from './weatherHourly';
import * as CityErrorActionCreators from './cityError';

export default {
  ...WeatherTodayActionCreators,
  ...WeatherFiveDaysActionCreators,
  ...WeatherHourlyActionCreators,
  ...CityErrorActionCreators,
};
