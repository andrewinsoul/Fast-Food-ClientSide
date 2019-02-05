import reducer from '../../reducers/authReducer';
import * as types from '../../actions/types';

describe('test reducers for authorizing a user', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      authenticated: false,
      user: {}
    });
  });
  it('should handle SET_CURRENT_USER', () => {
    const user = {
      name: 'Andrew Okoye',
      isAdmin: false,
      authenticated: true,
      iat: 12232433,
      iexp: 23928349
    };
    expect(
      reducer([], {
        type: types.SET_CURRENT_USER,
        user
      })
    ).toEqual(
      {
        authenticated: undefined,
        user:
          {
            authenticated: true,
            iat: 12232433,
            iexp: 23928349,
            isAdmin: false,
            name: "Andrew Okoye"
          }
      }
    );
  });
  it('should handle SET_CURRENT_FAIL', () => {
    const failAction = {
      type: types.SET_CURRENT_USER_FAIL,
      authenticated: false,
      error: 'error'
    };
    expect(reducer({}, failAction)).toEqual({ authenticated: false, error: 'error' });
  });
});
