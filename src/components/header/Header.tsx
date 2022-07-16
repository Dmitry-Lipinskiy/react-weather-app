import React, { useState } from 'react';
import http from '../../http';
import './header.css'

const API_KEY = "1c99c168e5f32cae7dc01015c0038525";
let lang: string = "en";
let city: any = "";

const Header = () => {

  const [value, setValue] = useState<any>(city);

  const getWeatherToday = (city: any) => {
    http.get(`weather?q=${city}&limit=1&appid=${API_KEY}&units=metric&lang=${lang}`).then(res => {
      setValue("");
      console.log(res);
    }).catch(err => console.log(err));
  }

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
          onClick={() => getWeatherToday(value)}
        >Search</button>
        <button type="button" className="btn btn-primary">Sing in</button>
      </div>
    </div>
  )

}

export default Header;