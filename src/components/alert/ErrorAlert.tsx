import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelectors';
import './errorAlert.css';

const ErrorAlert = () => {
  const { errorMessage } = useTypedSelector((state) => state.errorMessage);

  return (
    <div className="alert alert-danger" role="alert">
      Error {errorMessage.response.data.cod}:{' '}
      {errorMessage.response.data.message}
    </div>
  );
};

export default ErrorAlert;
