import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './router/AppRoutes';
import Header from './header/Header';
import NavBar from './navBar/NavBar';
import Context from '../context/context';

function App() {

  const [isError, setIsError] = useState(false);
  
  return (
    <Context.Provider value={{isError, setIsError}}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <NavBar />
          <AppRoutes />
        </div>
      </BrowserRouter>
    </Context.Provider>
  );

}

export default App;
