import React, { useState } from 'react';
import axios from 'axios';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { Navigate } from 'react-router';
import { NotificationManager } from 'react-notifications';
import Loader from './Loader';
import './pages/house.css';

/* eslint no-return-assign: "error" */
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

const HouseForm = () => {
  const [file, setFile] = useState('');
  const [house, setHouse] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    description: '',
    price: '',
    location: '',
  });

  const handleChange = (e) => {
    setHouse({ ...house, [e.target.name]: e.target.value });
    const { name, value } = e.target;
    const error = errors;
    switch (name) {
      case 'name':
        error.name = value.length < 5 ? 'Name must be 5 characters long!' : '';
        break;
      case 'description':
        error.description = value.length < 10 ? 'Description must be 10 characters long!' : '';
        break;
      case 'price':
        error.price = value.length < 1 ? 'Price must be 1 characters long!' : '';
        break;
      case 'location':
        error.location = value.length < 5 ? 'Location must be 5 characters long!' : '';
        break;
      default:
        break;
    }
    setErrors(error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm(errors)) {
      console.info('Valid Form');
    } else {
      console.error(errors);
    }
    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'upload');
    try {
      const uploadRes = await axios.post('https://api.cloudinary.com/v1_1/baroka/image/upload',
        formData);
      const { url } = uploadRes.data;
      const houseInfo = { ...house, image: url };
      await axios.post('http://localhost:3001/api/v1/houses', { house: houseInfo });
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
    NotificationManager.success('House added successfully', 'Success', 3000);
    Navigate('/houses');
  };

  return (
    <div className="container add-form">
      <h1 className="text-center mt-5">Add a House</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit} className="form-container">
          <div className="formInput" style={{ paddingBotton: '1rem' }}>
            <div className="image_form">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                }
                alt=""
                style={{ height: '200px', width: '200px', borderRadius: '50%' }}
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
              onChange={handleChange}
              noValidate
            />
            {errors.name.length > 0 && (
              <span className="error">{errors.name}</span>
            )}
          </label>
          <label htmlFor="description" className="form-label mb-3">
            Description
            <input
              type="text"
              className="form-control"
              name="description"
              id="description"
              onChange={handleChange}
              noValidate
            />
            {errors.description.length > 0 && (
              <span className="error">{errors.description}</span>
            )}
          </label>
          <label htmlFor="price" className="form-label mb-3">
            Price
            <input
              type="number"
              className="form-control"
              name="price"
              id="price"
              onChange={handleChange}
              noValidate
            />
            {errors.price.length > 0 && (
              <span className="error">{errors.price}</span>
            )}
          </label>
          <label htmlFor="location" className="form-label mb-3">
            Location
            <input
              type="text"
              className="form-control"
              name="location"
              id="location"
              onChange={handleChange}
              noValidate
            />
            {errors.location.length > 0 && (
              <span className="error">{errors.location}</span>
            )}
          </label>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary mt-3 mb-5"
              disabled={isLoading}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default HouseForm;
