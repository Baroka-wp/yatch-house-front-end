import React from 'react';
import '@splidejs/react-splide/css';
import './mainpage.css';
import Carousel from '../carousel';
import MobileNavbar from '../MobileNavBar';
import SideNavbar from '../MainNavBar';

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
      <h3> Select your desired destination</h3>
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
