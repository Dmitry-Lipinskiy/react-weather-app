import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './router/AppRoutes';
import Header from './header/Header';
import NavBar from './navBar/NavBar';
import Context from '../context/context';
import ErrorModal from './modal/ErrorModal';

function App() {

  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [isError, setIsError] = useState(false);
  
  return (
    <Context.Provider value={{isError, setIsError}}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <NavBar />
          <AppRoutes />
          <ErrorModal openErrorModal={isError} setOpenErrorModal={setOpenErrorModal} />
        </div>
      </BrowserRouter>
    </Context.Provider>
  );

}

export default App;
