import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import MainPage from './components/MainPage';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import NewReservation from './components/pages/NewReservation';
import { AuthContextProvider } from './context/AuthContext';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admins/login" element={<Login />} />
        <Route path="/admins/registration" element={<Registration />} />
        <AuthContextProvider>
          <Route path="/reservation/new" element={<NewReservation />} />
        </AuthContextProvider>
      </Routes>
    </BrowserRouter>
  </Provider>
);
export default App;
