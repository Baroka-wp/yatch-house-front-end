import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './components/pages/HomePage';
import MainPage from './components/pages/mainpage';
import AddHouse from './components/pages/AddHouse';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import NewReservation from './components/pages/NewReservation';
import House from './components/pages/House';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={<MainPage />} />
        <Route path="/houses/new" element={<AddHouse />} />
        <Route path="/admins/login" element={<Login />} />
        <Route path="/admins/registration" element={<Registration />} />
        <Route path="/reservation/:id" element={<House />} />
        <Route path="/reservation/:id/new" element={<NewReservation />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
