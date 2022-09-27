import React from 'react';
import './homepage.css';
import { Zoom } from 'react-slideshow-image';
import Slider from './Slider';

const HomePage = () => (
  <div>
    <div className="display_indicator">
      <Zoom scale={1.4}>
        <Slider image="/images/apartment2.jpg" />
        <Slider image="/images/apartment3.jpg" />
        <Slider image="/images/apartment4.jpg" />
        <Slider image="/images/apartment5.jpg" />
      </Zoom>
    </div>
  </div>
);

export default HomePage;
