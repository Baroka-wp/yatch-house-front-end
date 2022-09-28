import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import houseReducer, { getAllItems } from './house/houseReducer';
import reservationReducer from './reservation/reservationReducer';

const rootReducer = combineReducers({
  houses: houseReducer,
  reservations: reservationReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(getAllItems());

export default store;
