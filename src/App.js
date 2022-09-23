import React, { useContext } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { AuthContext } from './context/AuthContext';
import HomePage from './components/pages/homepage';
import MainPage from './components/pages/mainpage';
import AddHouse from './components/pages/AddHouse';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import NewReservation from './components/pages/NewReservation';
import House from './components/pages/House';
import MyReservation from './components/pages/MyReservation';

const App = () => {
  /* eslint-disable react/prop-types */
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  /* eslint-enable react/prop-types */

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/houses" element={<MainPage />} />
          <Route path="/houses/:id" element={<ProtectedRoute><House /></ProtectedRoute>} />
          <Route path="/houses/new" element={<ProtectedRoute><AddHouse /></ProtectedRoute>} />
          <Route path="/my_reservation" element={<ProtectedRoute><MyReservation /></ProtectedRoute>} />
          <Route path="/reservations/:id/new" element={<ProtectedRoute><NewReservation /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
