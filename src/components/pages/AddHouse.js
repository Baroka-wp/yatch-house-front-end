import React from 'react';
// import { Redirect } from 'react-router';
import HouseForm from '../HouseForm';
import './homepage.css';
// import { AuthContext } from '../../context/AuthContext';

const AddHouse = () =>
  // const { user } = React.useContext(AuthContext);
  // if (user.role !== 'admin') {
  //   return <Redirect to="/" />;
  // }
  (
    <div>
      <HouseForm />
    </div>
  );
export default AddHouse;
