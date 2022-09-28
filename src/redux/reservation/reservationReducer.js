import axios from 'axios';

const GET_ALL_RESERVATIONS = 'GET_ALL_RESERVATIONS';

export const getAllReservations = (id) => async (dispatch) => {
  const res = await axios.get('https://my-yatch-house.herokuapp.com/api/v1/reservations');
  const reservation = res.data;
  let myReservation = [];
  myReservation = reservation.data.filter((r) => r.user_id === id);

  dispatch({
    type: GET_ALL_RESERVATIONS,
    payload: myReservation,
  });
};

const reservationReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
};

export default reservationReducer;
