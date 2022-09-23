import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router';
import HouseForm from '../HouseForm';
import { AuthContext } from '../../context/AuthContext';

const AddHouse = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if(!user || !user.data.admin){
      return <Navigate to="/" />
    }
  }, []);

  return (
    <div>
      <HouseForm />
    </div>

  )
};
export default AddHouse;
