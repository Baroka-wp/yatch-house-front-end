import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import MobileNavbar from '../MobileNavBar';
import SideNavbar from '../MainNavBar';
import Carousel from '../carousel';

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
      <h3> AVAILABLE HOUSES</h3>
      <h6>Select your desired destination ....</h6>
      <div className="carousel">
        <Carousel />
      </div>
      <div className="main_page_footer">
        <p>©{new Date().getFullYear()} Yatch House</p>
      </div>
    </div>
  </div>
);

export default MainPage;
