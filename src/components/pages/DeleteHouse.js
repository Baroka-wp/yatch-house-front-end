import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import MobileNavbar from '../MobileNavBar';
import SideNavbar from '../MainNavBar';
import CarouselDelete from '../CarouselDelete';

const DeleteHouse = () => (
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
        <CarouselDelete />
      </div>
      <div className="main_page_footer">
        <p>
          ©
          {new Date().getFullYear()}
          {' '}
          Yatch House
        </p>
      </div>
    </div>
  </div>
);

export default DeleteHouse;
