import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/Yatch-House.png';
import './pages/mainpage.css';

const SideNavbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/my-reservation',
      text: 'My Reservations',
    },
    {
      id: 3,
      path: '/houses',
      text: 'Houses',
    },
    {
      id: 4,
      path: '/houses/:id/new',
      text: 'Add House',
    },
    {
      id: 5,
      path: '/houses/delete',
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
        </ul>
      </div>
      <div className="side_botton">
        <ul className="sidebar_nav_list">
          <li key={links[1].id}>
            <NavLink to={links[1].path}>
              <h4>{links[1].text}</h4>
            </NavLink>
          </li>
          <li key={links[3].id}>
            <NavLink to={links[3].path}>
              <h4>{links[3].text}</h4>
            </NavLink>
          </li>
          <li key={links[4].id}>
            <NavLink to={links[4].path} className="">
              <h4>{links[4].text}</h4>
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
