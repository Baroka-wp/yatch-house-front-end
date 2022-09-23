import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import houseReducer from './house/houseReducer';

const rootReducer = combineReducers({
  houses: houseReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
