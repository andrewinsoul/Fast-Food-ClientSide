import { combineReducers } from 'redux';
import authReducer from './authReducer';
import menuReducer from './menuReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  authReducer,
  menuReducer,
  cartReducer
});

export default rootReducer;
