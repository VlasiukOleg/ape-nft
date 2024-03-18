import { lazy } from 'react';

import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/HomePage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};
