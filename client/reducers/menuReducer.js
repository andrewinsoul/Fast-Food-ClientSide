import { GET_ALL_MENU } from '../actions/types';

const prevState = {
  menu: []
};

/**
 *
 * @param {object} state - object that holds the value of the initial state
 * @param {*} action - object that has a type property
 * @returns {object} - returns new object after action dispatches
 */
export default (state = prevState, action) => {
  if (action.type === GET_ALL_MENU) {
    return {
      ...state,
      menu: action.menu
    };
  } else {
    return state;
  }
};
