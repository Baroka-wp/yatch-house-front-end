import React,{useState} from 'react';
import axios from 'axios';



const HouseForm = () => {
    const { user } = React.useContext(AuthContext);

    if (user.role !== 'admin') {
        return <Redirect to="/" />;
    }

    const [inputs, setInputs] = useState({
        user_id: user.id,
        name: '',
        description: '',
        price: '',
        location: '',
        image: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/houses', inputs)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
      <div className='container'>
        <h1 className='text-center mt-5'>Add a House</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
            <input
                type='text'
                name='name'
                id='name'
                value={inputs.name}
                onChange={(event) => setInputs({...inputs, name: event.target.value})}
            />
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            className='form-control'
            name='description'
            id='description'
            value={inputs.description}
            onChange={(event) =>
              setInputs({ ...inputs, description: event.target.value })
            }
          />
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            className='form-control'
            name='price'
            id='price'
            value={inputs.price}
            onChange={(event) =>
              setInputs({ ...inputs, price: event.target.value })
            }
          />
          <label htmlFor='location'>Location</label>
          <input
            type='text'
            className='form-control'
            name='location'
            id='location'
            value={inputs.location}
            onChange={(event) =>
              setInputs({ ...inputs, location: event.target.value })
            }
          />
          <label htmlFor='image'>Image</label>
          <input
            type='text'
            className='form-control'
            name='image'
            id='image'
            value={inputs.image}
            onChange={(event) =>
              setInputs({ ...inputs, image: event.target.value })
            }
          />
          <div className='text-center'>
            <button type='submit' className='btn btn-primary mt-5'>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
};


export default HouseForm;
