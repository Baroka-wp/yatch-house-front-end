import React from 'react';

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

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, description, price, location, image } = this.state;
    const house = {
      name,
      description,
      price,
      location,
      image,
    };
    const { createHouse } = this.props;
    createHouse(house);
    this.setState({
      name: '',
      description: '',
      price: '',
      location: '',
      image: '',
    });
  };

  render() {
    const { name, description, price, location, image } = this.state;
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
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={description}
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
              value={price}
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
              value={location}
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
                value={image}
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

export default HouseForm;
