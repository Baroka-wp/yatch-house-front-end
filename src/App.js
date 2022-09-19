import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/mainpage';
import MobileNavbar from './components/MobileNavBar';

const App = () => (
  <>
    <MobileNavbar />
    <Routes>
      <Route path="/" element={<div><MainPage /></div>} />
    </Routes>
  </>
);

export default App;
