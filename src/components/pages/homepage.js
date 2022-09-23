import React from 'react';
import './homepage.css';
import { Zoom } from 'react-slideshow-image';
import Slider from './Slider';

const HomePage = () => (
  <div>
    <div className="wallpaper-content">
      <h1> Rent a Yatch House with Yatch flex</h1>
    </div>
    <div className="display_indicator">
      <Zoom scale={1.4}>
        <Slider image="/images/maldives.jpg" />
        <Slider image="/images/yatch1.jpg" />
        <Slider image="/images/yatch2.jpg" />
      </Zoom>
    </div>
  </div>
);

export default HomePage;
