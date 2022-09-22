import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import MobileNavbar from '../MobileNavBar';
import SideNavbar from '../MainNavBar';

const MyReservation = () => (
  <div className="main_page">
    <div className="mainNavBar">
      <SideNavbar />
    </div>
    <div className="wrapper">
      <div className="mobile_menu_background">
        <MobileNavbar />
      </div>
      <div className="clearfix" />
      <h3> Your reservation report</h3>
      <div className="reservation_report">
        
      </div>
      <div className="main_page_footer">
        <p>© 2022 Yatch House</p>
      </div>
    </div>
  </div>
);

export default MyReservation;
