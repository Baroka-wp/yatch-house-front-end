import React from 'react';
import { NavLink } from 'react-router-dom';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import './homepage.css';
import { Zoom } from 'react-slideshow-image';

const HomePage = () => (
  <div>
    <div className="display_indicator">
      <Zoom scale={1.4}>
        <div className="each-slide-effect">
          <div style={{
            backgroundImage: 'url("/images/maldives.jpg")',
            height: '100vh',
          }}
          >
            <div className="wallpaper-content">
              <h1> Rent a Yatch House with Yatch flex</h1>
            </div>
            <div className="user_sign_btn">
              <div className="reserve-button">
                <NavLink to="/admins/login">
                  <button className="reserve" type="button">
                    <span>Sign In</span>
                    <span className="reserve-icon">
                      <ExpandCircleDownIcon
                        sx={{ color: '#fff', transform: 'rotate(-90deg)' }}
                      />
                    </span>
                  </button>
                </NavLink>
                <NavLink to="/admins/registration">
                  <button className="reserve" type="button">
                    <span>Sign Up</span>
                    <span className="reserve-icon">
                      <ExpandCircleDownIcon
                        sx={{ color: '#fff', transform: 'rotate(-90deg)' }}
                      />
                    </span>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{
            backgroundImage: 'url("/images/yatch1.jpg")',
            height: '100vh',
          }}
          >
            <div className="wallpaper-content">
              <h1> Rent a Yatch House with Yatch flex</h1>
            </div>
            <div className="user_sign_btn">
              <div className="reserve-button">
                <NavLink to="/admins/login">
                  <button className="reserve" type="button">
                    <span>Sign In</span>
                    <span className="reserve-icon">
                      <ExpandCircleDownIcon
                        sx={{ color: '#fff', transform: 'rotate(-90deg)' }}
                      />
                    </span>
                  </button>
                </NavLink>
                <NavLink to="/admins/registration">
                  <button className="reserve" type="button">
                    <span>Sign Up</span>
                    <span className="reserve-icon">
                      <ExpandCircleDownIcon
                        sx={{ color: '#fff', transform: 'rotate(-90deg)' }}
                      />
                    </span>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{
            backgroundImage: 'url("/images/yatch2.jpg")',
            height: '100vh',
          }}
          >
            <div className="wallpaper-content">
              <h1> Rent a Yatch House with Yatch flex</h1>
            </div>
            <div className="user_sign_btn">
              <div className="reserve-button">
                <NavLink to="/admins/login">
                  <button className="reserve" type="button">
                    <span>Sign In</span>
                    <span className="reserve-icon">
                      <ExpandCircleDownIcon
                        sx={{ color: '#fff', transform: 'rotate(-90deg)' }}
                      />
                    </span>
                  </button>
                </NavLink>
                <NavLink to="/admins/registration">
                  <button className="reserve" type="button">
                    <span>Sign Up</span>
                    <span className="reserve-icon">
                      <ExpandCircleDownIcon
                        sx={{ color: '#fff', transform: 'rotate(-90deg)' }}
                      />
                    </span>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  </div>
);

export default HomePage;
