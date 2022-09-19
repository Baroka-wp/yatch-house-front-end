import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import CircleIcon from '@mui/icons-material/Circle';
import '@splidejs/react-splide/css';
import './mainpage.css';
import Carousel from './Carousel';

const MainPage = () => (
  <div>
    <div className="wrapper">
      <h2>Popular Destinations</h2>
      <h3> Select your desired destination</h3>
      <div className="dots">
        {[...Array(15)].map(() => (
          <div key={uuidv4()}>
            <CircleIcon color="disabled" sx={{ fontSize: '0.5rem' }} />
          </div>
        ))}
      </div>
      <Carousel />
    </div>
  </div>
);

export default MainPage;
