import React, { useContext } from 'react';
// import axios from 'axios';
import { NavLink } from 'react-router-dom';
import logo from '../img/Yatch-House.png';
import './pages/mainpage.css';

import { AuthContext } from '../context/AuthContext';

const SideNavbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const isAdmin = (user) => {
    if (user) {
      return user.data.admin;
    }
    return false;
  };

  const handleLogout = async () => {
    // try {
    //   await axios.delete('http://localhost:3001/users/sign_out');
    // } catch (err) {
    //   console.log(err);
    // }
    dispatch({ type: 'LOGOUT' });
  };

  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/my_reservation',
      text: 'My Reservations',
    },
    {
      id: 3,
      path: '/houses',
      text: 'Houses',
    },
    {
      id: 4,
      path: '/houses_new',
      text: 'Add House',
    },
    {
      id: 5,
      path: '/login',
      text: 'Sign In',
    },
    {
      id: 6,
      path: '/registration',
      text: 'Sign up',
    },
    {
      id: 7,
      path: '/houses_delete',
      text: 'Delete House',
    },
  ];

  return (
    <nav className="sidebar_nav">
      <div className="side_top">
        <div className="logo">
          <NavLink to={links[0].path}>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <ul className="sidebar_nav_list">
          <li key={links[2].id}>
            <NavLink to={links[2].path}>
              <h4>{links[2].text}</h4>
            </NavLink>
          </li>
          {user && (
            <li key={links[1].id}>
              <NavLink to={links[1].path}>
                <h4>{links[1].text}</h4>
              </NavLink>
            </li>
          )}
          {isAdmin(user) && (
            <>
              <li key={links[3].id}>
                <NavLink to={links[3].path}>
                  <h4>{links[3].text}</h4>
                </NavLink>
              </li>
              <li key={links[6].id}>
                <NavLink to={links[6].path}>
                  <h4>{links[6].text}</h4>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="side_botton">
        {!user && (
          <ul className="sidebar_nav_list">
            <li key={links[4].id}>
              <NavLink to={links[4].path} className="">
                <h4>{links[4].text}</h4>
              </NavLink>
            </li>
            <li key={links[5].id}>
              <NavLink to={links[5].path} className="">
                <h4>{links[5].text}</h4>
              </NavLink>
            </li>
          </ul>
        )}

        {user && (
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <button
              onClick={() => handleLogout()}
              type="button"
              className="btn btn-danger"
            >
              Log Out
            </button>
          </div>
        )}
        <div className="copyright">
          <p>
            ©
            {new Date().getFullYear()}
            {' '}
            Yatch House
          </p>
        </div>
      </div>
    </nav>
  );
};
export default SideNavbar;
