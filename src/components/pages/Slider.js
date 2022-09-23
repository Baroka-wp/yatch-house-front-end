import { NavLink } from 'react-router-dom';

/* eslint-disable react/prop-types */
const Slider = ({ image }) => (
  <div className="each-slide-effect">
    <div style={{
      backgroundImage: `url(${image})`,
      height: '100vh',
    }}
    >
      <div className="wallpaper-content">
        <h1> Rent a Yatch House with Yatch flex</h1>
      </div>
      <div className="user_sign_btn">
        <div className="reserve-button">
          <NavLink to="/login">
            <button className="reserve sign_in" type="button">
              <span>Sign In</span>
            </button>
          </NavLink>
          <NavLink to="/registration">
            <button className="reserve sign_up" type="button">
              <span>Sign Up</span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);
/* eslint-enable react/prop-types */

export default Slider;
