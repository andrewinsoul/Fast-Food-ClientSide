import jwtDecode from 'jwt-decode';
import axios from 'axios';
import SET_CURRENT_USER from './types';

const setCurrentUser = user => ({
  user,
  authenticated: true,
  type: SET_CURRENT_USER,
});

export default (URL, userDetails) => async dispatch => {
  try {
    const response = await axios.post(
      URL,
      userDetails
    );
    const { token } = response.data;
    localStorage.setItem('x-access-token', token);
    const user = jwtDecode(token);
    dispatch(setCurrentUser(user));
    return { status: 'success', message: response.data.message };
  } catch (error) {
    console.error(error);
    return { status: 'error', error };
  }
};
