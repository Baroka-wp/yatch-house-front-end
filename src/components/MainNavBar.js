import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/Yatch-House.png';

const SideNavbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/reservation',
      text: 'Home',
    },
    {
      id: 3,
      path: '/houses/new',
      text: 'Add House',
    },
    {
      id: 4,
      path: '/admins/login',
      text: 'Sign In',
    },
    {
      id: 5,
      path: '/admins/registration',
      text: 'Register',
    },
    {
      id: 6,
      path: '/myreservation',
      text: 'My Reservations',
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
          <li key={links[1].id}>
            <NavLink to={links[1].path}>
              <h4>{links[1].text}</h4>
            </NavLink>
          </li>
          <li key={links[5].id}>
            <NavLink to={links[5].path}>
              <h4>{links[5].text}</h4>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="side_botton">
        <ul className="sidebar_nav_list">
          <li key={links[2].id}>
            <NavLink to={links[2].path} className="">
              <h4>{links[2].text}</h4>
            </NavLink>
          </li>
          <li key={links[3].id}>
            <NavLink to={links[3].path} className="">
              <h4>{links[3].text}</h4>
            </NavLink>
          </li>
        </ul>
        <div className="copyright">
          <p>© 2022 Yatch House</p>
        </div>
      </div>
    </nav>
  );
};
export default SideNavbar;
