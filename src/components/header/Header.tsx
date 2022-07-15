import React from 'react';
import './header.css'

const Header = () => {

  return (
    <div className='header-container'>
      <h2>MY WEATHER</h2>
      <div className='header-options-block'>
        <input type="text" className="form-control" placeholder="City name"/>
        <button type="button" className="btn btn-success">Search</button>
        <button type="button" className="btn btn-primary">Sing in</button>
      </div>
    </div>
  )

}

export default Header;