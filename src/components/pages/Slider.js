import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

/* eslint-disable react/prop-types */
const Slider = ({ image }) => {
  const { user } = useContext(AuthContext);

  const isLoggedIn = (user) => {
    if (user) {
      return true;
    }
    return false;
  };

  return (
    <div className="each-slide-effect">
      <div
        style={{
          backgroundImage: `url(${image})`,
          height: '100vh',
          width: '100wh',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="wallpaper-content">
          <h1>
            <span>YATCH HOUSE </span>
            the finest shared and private houses delivered in the most
            sought-after destinations throughout the world.
          </h1>
        </div>
        {isLoggedIn(user) ? (
          <div className="user_sign_btn">
            <div className="reserve-button reserve_now_center">
              <Link to="/houses">
                <button className="reserve reserve_now" type="button">
                  <span>Rerserve now</span>
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="user_sign_btn">
            <div className="reserve-button">
              <Link to="/login">
                <button className="reserve sign_in" type="button">
                  <span>Sign In</span>
                </button>
              </Link>
              <Link to="/registration">
                <button className="reserve sign_up" type="button">
                  <span>Sign Up</span>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
/* eslint-enable react/prop-types */

export default Slider;
