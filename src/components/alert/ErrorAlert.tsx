import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelectors';
import './errorAlert.css';

const ErrorAlert = () => {
  const { errorMessage } = useTypedSelector((state) => state.errorMessage);
  console.log(errorMessage);

  return (
    <div className="alert alert-warning" role="alert">
      Error {errorMessage.response.data.cod}:{' '}
      {errorMessage.response.data.message}
    </div>
  );
};

export default ErrorAlert;
