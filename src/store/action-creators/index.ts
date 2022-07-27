import * as WeatherTodayActionCreators from './weatherToday';
import * as WeatherFiveDaysActionCreators from './weatherFiveDays';
import * as WeatherHourlyActionCreators from './weatherHourly';
import * as CityErrorActionCreators from './cityError';
import * as ErrorValueActionCreators from './errorValue';

export default {
  ...WeatherTodayActionCreators,
  ...WeatherFiveDaysActionCreators,
  ...WeatherHourlyActionCreators,
  ...CityErrorActionCreators,
  ...ErrorValueActionCreators,
};
