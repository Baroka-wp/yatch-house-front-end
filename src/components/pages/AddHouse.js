import React from 'react';
import HouseForm from './HouseForm';
import { AuthContext } from '../context/AuthContext';


const AddHouse = () => {
    const { user } = React.useContext(AuthContext);

    if (user.role !== 'admin') {
        return <Redirect to="/" />;
    }
    return (
        <div>
            <HouseForm />
        </div>
    );
}
export default AddHouse;