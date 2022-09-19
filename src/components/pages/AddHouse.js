import Axios from 'axios';
import React,{useState} from 'react';


const AddItem = () => {
    const [inputs, setInputs] = useState({
        name: '',
        price: '',
        description: '',
        image: '',
        location: '',
    });

    <div>
        <h1>Add a House</h1>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" />
            <label htmlFor="image">Image</label>
            <input type="text" name="image" id="image" />
            <label htmlFor="price">Price</label>
            <input type="text" name="price" id="price" />
            <label htmlFor="location">Location</label>
            <input type="text" name="location" id="location" />
            <button>
                Add new House
            </button>
        </form>

    </div>

}