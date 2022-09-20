import React, { useState } from 'react';
// import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const HouseForm = () => {
  const { user } = React.useContext(AuthContext);

  const [house, setHouse] = useState({
    user_id: user.id,
    name: '',
    description: '',
    price: '',
    location: '',
    image: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  //     axios.post('http://localhost:3000/houses', house)
  //     .then((response) => {
  //         console.log(response);
  //     })
  //     .catch((error) => {
  //         console.log(error);
  //     });
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Add a House</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
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
        <label htmlFor="description">
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
        <label htmlFor="price">
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
        <label htmlFor="location">
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
        <label htmlFor="image">
          Image
          <input
            type="text"
            className="form-control"
            name="image"
            id="image"
            value={house.image}
            onChange={(event) => setHouse({ ...house, image: event.target.value })}
          />
        </label>
        <div className="text-center">
          <button type="submit" className="btn btn-primary mt-5">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default HouseForm;
