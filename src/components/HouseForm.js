import React, { useState } from 'react';
import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

import SideNavbar from './MainNavBar';
import MobileNavbar from './MobileNavBar';
import './pages/house.css';

const HouseForm = () => {
  // const { user } = React.useContext(AuthContext);
  const [file, setFile] = useState('');
  const [house, setHouse] = useState({
    name: '',
    description: '',
    price: '',
    location: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'upload');
    try {
      const uploadRes = await axios.post(
        'https://api.cloudinary.com/v1_1/baroka/image/upload',
        formData,
      );

      const { url } = uploadRes.data;
      const houseInfo = {
        ...house,
        image: url,
      };

      await axios.post('http://localhost:3001/api/v1/houses',
        { house: houseInfo });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="main_page">
      <div className="mainNavBar">
        <SideNavbar />
      </div>
      <div className="wrapper">
        <div className="mobile_menu_background">
          <MobileNavbar />
        </div>
        <div className="clearfix" />
        <div className="container add-form">
          <h1 className="text-center mt-5">Add a House</h1>
          <form onSubmit={handleSubmit} className="form-container">
            <div className="formInput">
              <div className="image_form">
                <img
                  src={
                      file
                        ? URL.createObjectURL(file)
                        : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                    }
                  alt=""
                />
              </div>
              <label htmlFor="file">
                Image:
                {' '}
                <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: 'none' }}
              />
            </div>
            <label htmlFor="name" className="form-label mb-3">
              Name
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                value={house.name}
                onChange={(event) => setHouse({ ...house, name: event.target.value })}
              />
            </label>
            <label htmlFor="description" className="form-label mb-3">
              Description
              <input
                type="text"
                className="form-control"
                name="description"
                id="description"
                value={house.description}
                onChange={(event) => setHouse({ ...house, description: event.target.value })}
              />
            </label>
            <label htmlFor="price" className="form-label mb-3">
              Price
              <input
                type="number"
                className="form-control"
                name="price"
                id="price"
                value={house.price}
                onChange={(event) => setHouse({ ...house, price: event.target.value })}
              />
            </label>
            <label htmlFor="location" className="form-label mb-3">
              Location
              <input
                type="text"
                className="form-control"
                name="location"
                id="location"
                value={house.location}
                onChange={(event) => setHouse({ ...house, location: event.target.value })}
              />
            </label>
            <div className="text-center">
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="main_page_footer">
          <p>© 2022 Yatch House</p>
        </div>
      </div>
    </div>
  );
};

export default HouseForm;
