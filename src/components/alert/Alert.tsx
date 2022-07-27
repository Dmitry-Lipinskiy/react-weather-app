import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelectors';

const Alert = () => {
  const { errorMessage } = useTypedSelector((state) => state.errorMessage);
  console.log(errorMessage);

  return (
    <div>Alert</div>
  );
};

export default Alert;
