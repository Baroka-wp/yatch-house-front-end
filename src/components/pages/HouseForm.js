import React,{useState} from 'react';


const HouseForm = () => {
    const [house, setHouse] = useState({
        name: '',
        description: '',
        price: '',
        image: '',
        location: '',
    });

    <div>
        <h1>Add a House: </h1>
        <form>
            <input type="text" name="name" placeholder="House Name" value={state.name} />
            <input type="text" name="description" placeholder="House Description" value={state.description} />
            <input type="text" name="location" placeholder="House Location" value={state.location} />
            <input type="text" name="price" placeholder="House Price" value={state.price}/>
            <input type="text" name="image" placeholder="House Image" value={state.image} />
            <button type="submit">
                Add new House
            </button>
        </form>
    </div>

}

export default HouseForm;
