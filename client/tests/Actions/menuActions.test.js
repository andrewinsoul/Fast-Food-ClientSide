import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as apiRequests from "../../utilities/apiCalls";
import getMenuList from "../mocks/getMenuMock";
import menuActions from "../../actions/menuAction";
import * as types from "../../actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("test for async action that fetches all available menu", () => {
  it("creates GET_ALL_MENU when getting all menus has been done", async () => {
    jest.spyOn(apiRequests.request, 'get').mockImplementation(() => ({
      data: {
        menuList: getMenuList
      }
    }));
    const expectedActions = [
      { type: types.GET_ALL_MENU, menu: getMenuList, authenticated: true }
    ];
    const store = mockStore({ menu: {}, authenticated: true });
    await store.dispatch(menuActions(getMenuList));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('test for the catch block of the Get method', async () => {
    jest.spyOn(apiRequests.request, 'get').mockImplementation(() => (
      Promise.reject('error')
    ));
    const store = mockStore({ menu: {}, authenticated: true });
    await store.dispatch(menuActions(getMenuList));
  });
});
