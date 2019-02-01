import { combineReducers } from 'redux';
import authReducer from './authReducer';
import menuReducer from './menuReducer';

const mainReducer = combineReducers({
  authReducer,
  menuReducer
});

export default mainReducer;
