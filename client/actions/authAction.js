import jwtDecode from 'jwt-decode';
import { Post } from '../utilities/apiCalls';
import { SET_CURRENT_USER, SET_CURRENT_USER_FAIL } from './types';

const setCurrentUser = user => ({
  user,
  authenticated: true,
  type: SET_CURRENT_USER,
});


const setCurrentUserFail = error => ({
  authenticated: false,
  type: SET_CURRENT_USER_FAIL,
  error
});

export default (endpoint, userDetails) => async dispatch => {
  try {
    const response = await Post(endpoint, userDetails);
    if (response.error) {
      dispatch(setCurrentUserFail(response.error));
      return { status: 'error', error: response.error };
    }
    const { token } = response;
    localStorage.setItem('x-access-token', token);
    const user = jwtDecode(token);
    dispatch(setCurrentUser(user));
    return { status: 'success', message: response.message };
  } catch (error) {
    return { status: 'error', error };
  }
};
