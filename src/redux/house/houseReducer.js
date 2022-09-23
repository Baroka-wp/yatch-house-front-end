import axios from 'axios';

const GET_ALL_ITEMS = 'GET_ALL_ITEMS';
const DELETE_HOUSE = 'DELETE_HOUSE';

export const getAllItems = () => async (dispatch) => {
  const res = await axios.get('http://localhost:3001/api/v1/houses');
  const houses = res.data;

  dispatch({
    type: GET_ALL_ITEMS,
    payload: houses,
  });
};

export const deleteHouse = (id) => ({ type: DELETE_HOUSE, payload: id });

const houseReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_ITEMS:
      return action.payload;
    case DELETE_HOUSE:
      return state.filter((house) => house.id !== action.payload);
    default:
      return state;
  }
};

export default houseReducer;
