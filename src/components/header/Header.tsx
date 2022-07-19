import React, { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import './header.css';

let city: any = "Minsk";

const Header = () => {

  const [value, setValue] = useState('');

  const {getWeatherToday} = useActions();
  const {getWeatherFiveDays} = useActions();

  useEffect(() => {
    getWeatherFiveDays(city);
  }, []);

  useEffect(() => {
    getWeatherToday(city);
  }, []);

  return (
    <div className='header-container'>
      <h2>MY WEATHER</h2>
      <div className='header-options-block'>
        <input type="text" 
          className="form-control" 
          placeholder="City name"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="button" 
          className="btn btn-success" 
          onClick={() => (getWeatherToday(value), getWeatherFiveDays(value))}
        >Search</button>
        <button type="button" className="btn btn-primary">Sing in</button>
      </div>
    </div>
  )

}

export default Header;