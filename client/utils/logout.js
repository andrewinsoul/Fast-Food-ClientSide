import store from '../store/configureStore';
import { CLEAR_CART } from '../actions/types';
/**
 * @returns {null} - returns null value
 */
export default () => {
  localStorage.clear();
  store.dispatch({ type: CLEAR_CART })
};
