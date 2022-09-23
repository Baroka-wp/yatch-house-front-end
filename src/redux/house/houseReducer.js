import axios from 'axios';

const GET_ALL_ITEMS = 'GET_ALL_ITEMS';

export const getAllItems = () => async (dispatch) => {
  const res = await axios.get('http://localhost:3001/api/v1/houses');
  const houses = res.data;

  dispatch({
    type: GET_ALL_ITEMS,
    payload: houses,
  });
};

const houseReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

export default houseReducer;
