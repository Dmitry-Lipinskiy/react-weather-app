import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FiveDays from '../../pages/FiveDays';
import Today from '../../pages/Today';

const AppRoutes = () => {
  
  return (
    <Routes>
      <Route path="today" element={<Today />} />
      <Route path="fiveDays" element={<FiveDays />} />
      <Route path="*" element={<Today />} />
    </Routes>
  );
};

export default AppRoutes;
