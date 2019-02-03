import reducer from '../../reducers/authReducer';

describe('test reducer for the menu action', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ authenticated: false, user: {} });
  });
});
