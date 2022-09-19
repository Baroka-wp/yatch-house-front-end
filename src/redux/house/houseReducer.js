// import axios from 'axios';
import houses from '../../components/dummydata/joydata';

const GET_ALL_ITEMS = 'GET_ALL_ITEMS';

export const getAllItems = () => async (dispatch) => {
  // const url = '';
  // const res = await axios.get(url);
  // const data = res.data;
  const data = houses;

  dispatch({
    type: GET_ALL_ITEMS,
    payload: data,
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
