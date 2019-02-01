import jwtDecode from 'jwt-decode';
import { Post } from '../utilities/apiCalls';
import { SET_CURRENT_USER } from './types';

const setCurrentUser = user => ({
  user,
  authenticated: true,
  type: SET_CURRENT_USER,
});

export default (endpoint, userDetails) => async dispatch => {
  try {
    const response = await Post(endpoint, userDetails);
    const { token } = response;
    localStorage.setItem('x-access-token', token);
    const user = jwtDecode(token);
    dispatch(setCurrentUser(user));
    return { status: 'success', message: response.message };
  } catch (error) {
    console.error(error);
    return { status: 'error', error };
  }
};
