import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import Socials from '../socials';
import 'react-slideshow-image/dist/styles.css';
import yatches from '../dummydata/joydata';
import MobileNavbar from '../MobileNavBar';
import SideNavbar from '../MainNavBar';
import Carousel from '../Carousel';

const MainPage = () => (
  <div className="main_page">
    <div className="mainNavBar">
      <SideNavbar />
    </div>
    <div className="wrapper">
      <div className="mobile_menu_background">
        <MobileNavbar />
      </div>
      <div className="clearfix" />
      <h3> Select your desired destination ....</h3>
      <div className="carousel">
        <Carousel />
      </div>
      <div className="main_page_footer">
        <p>© 2022 Yatch House</p>
      </div>
    </div>
  </div>
);

export default MainPage;
