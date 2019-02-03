import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import sinon from 'sinon';
import thunk from 'redux-thunk';
import getMenuList from '../mocks/getMenuMock';
import * as menuActions from '../../actions/menuAction';
import * as types from '../../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test for async action that fetches all available menu', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('creates GET_ALL_MENU when getting all menus has been done', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getMenuList
      });
    });
    const expectedActions = [
      { type: types.GET_ALL_MENU, menu: getMenuList, authenticated: true }
    ];
    const store = mockStore({ menu: {}, authenticated: true });
    await store.dispatch(menuActions.getAllMenu(getMenuList));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
