import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './router/AppRoutes';
import Header from './header/Header';
import NavBar from './navBar/NavBar';
import ErrorAlert from './alert/ErrorAlert';
import { useTypedSelector } from '../hooks/useTypedSelectors';

function App() {
  const { isError } = useTypedSelector((state) => state.isError);
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        { isError &&
          <ErrorAlert />
        }
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
