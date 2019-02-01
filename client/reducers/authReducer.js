import { SET_CURRENT_USER, SET_CURRENT_USER_FAIL } from '../actions/types';

const prevState = {
  user: {},
  authenticated: false
};

/**
 *
 * @param {object} state - object that holds the value of the initial state
 * @param {*} action - object that has a type property
 * @returns {object} - returns new object after action dispatches
 */
export default (state = prevState, action) => {
  switch (action.type) {
  case SET_CURRENT_USER:
    return { ...state, user: action.user, authenticated: action.authenticated };
  case SET_CURRENT_USER_FAIL:
    return {
      ...state,
      authenticated: action.authenticated,
      error: action.error
    };
  default:
    return state;
  }
};
