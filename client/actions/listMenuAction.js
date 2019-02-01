import { GET_ALL_MENU } from './types';
import { Get } from '../utilities/apiCalls';

const listMenu = menu => ({
  authenticated: true,
  menu,
  type: GET_ALL_MENU
});
export default () => async dispatch => {
  try {
    const res = await Get('/menu');
    dispatch(listMenu(res.menuList));
    return { status: 'success' };
  } catch (error) {
    Promise.reject(error);
  }
};
