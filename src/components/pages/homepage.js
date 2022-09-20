import React from 'react';
import { NavLink } from 'react-router-dom';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import CircleIcon from '@mui/icons-material/Circle';
import './homepage.css';
import { v4 as uuidv4 } from 'uuid';
import MobileNavbar from '../MobileNavBar';

const HomePage = () => (
  <div>
    <div
      className="wallpaper"
      style={{
        backgroundImage: 'url(/images/maldives.jpg)',
        backgroundSize: 'cover',
        height: '100vh',
        position: 'relative',
        width: '100%',
      }}
    >
      <MobileNavbar />
      <div className="wallpaper-content">
        <h1> Rent a Yatch House with Yatch flex</h1>
      </div>
      <div className="reserve-button">
        <NavLink to="/reservation">
          <button className="reserve" type="button">
            <span>Reserve Now</span>
            <span className="reserve-icon">
              <ExpandCircleDownIcon
                sx={{ color: '#fff', transform: 'rotate(-90deg)' }}
              />
            </span>
          </button>
        </NavLink>
      </div>
      <div className="homepage-dots">
        {[...Array(4)].map(() => (
          <div key={uuidv4()}>
            <CircleIcon sx={{ fontSize: '1rem', border: '2px solid white', borderRadius: '50%' }} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HomePage;
