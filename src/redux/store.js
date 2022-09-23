import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import houseReducer from './house/houseReducer';
import reservationReducer from './reservation/reservationReducer';

const rootReducer = combineReducers({
  houses: houseReducer,
  reservations: reservationReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
