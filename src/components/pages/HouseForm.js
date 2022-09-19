import React from 'react';
import axios from 'axios';
class HouseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      price: '',
      location: '',
      image: '',
    };
  }

  handleSubmit = (event) => {
    axios({
        method: 'post',
        url: 'http://localhost:3000/houses',
        data: {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            location: this.state.location,
            image: this.state.image,
        },
    }).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    }
    );
    event.preventDefault();
  }

  handleChange = (event) => {
    const name = event.target.name;
    const newState = {};
    newState[name] = event.target.value;
    this.setState(newState);
    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5">Add a new house</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                type="text"
                className="form-control"
                id="image"
                name="image"
                value={this.state.image}
                onChange={this.handleChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Add House
            </button>
            </form>
        </div>
        );
    }
}
export default HouseForm;
