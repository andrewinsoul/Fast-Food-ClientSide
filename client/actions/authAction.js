import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { SET_CURRENT_USER } from './types';

const setCurrentUser = user => ({
  user,
  authenticated: true,
  type: SET_CURRENT_USER,
});

export const loginAction = userDetails => async dispatch => {
  try {
    const response = await axios.post(
      'http://localhost:8000/api/v1/auth/login',
      userDetails
    );
    const { token } = response.data;
    // setAuthorization(token);
    localStorage.setItem('x-access-token', token);
    const user = jwtDecode(token);
    dispatch(setCurrentUser(user));
    return { status: 'success', message: response.data.message };
  } catch (error) {
    console.error(error);
    return { status: 'error', error };
  }
}
