import React from 'react';
// import { Navigate } from 'react-router';
import HouseForm from '../HouseForm';
import SideNavbar from '../MainNavBar';
import MobileNavbar from '../MobileNavBar';

const AddHouse = () => (
  <div className="main_page">
    <div className="mainNavBar">
      <SideNavbar />
    </div>
    <div className="wrapper">
      <div className="mobile_menu_background">
        <MobileNavbar />
      </div>
      <div className="clearfix" />
      <HouseForm />
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
);
export default AddHouse;
