import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as cartActions from "../../actions/cartAction";
import * as types from "../../actions/types";
import * as apiRequests from "../../utilities/apiCalls";
import menuList from "../mocks/getMenuMock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const orders = [{
  food: 'Burger & Pepsi',
  quantity: 1,
  description: 'desc'
}];

describe("test for actions related to cart", () => {
  it("dispatches ADD_TO_CART action", async () => {
    const expectedAction = [
      {
        type: types.ADD_TO_CART,
        foodItem: 1
      }
    ];
    const store = mockStore({ cart: {} });
    await store.dispatch(cartActions.AddToCart(1));
    expect(store.getActions()).toEqual(expectedAction);
  });
  it("dispatches REMOVE_FROM_CART", async () => {
    const expectedAction = [
      {
        type: types.REMOVE_FROM_CART,
        foodId: 2
      }
    ];
    const store = mockStore({ cart: {} });
    await store.dispatch(cartActions.RemoveFromCart(2));
    expect(store.getActions()).toEqual(expectedAction);
  });
  it("dispatches ADD_QTY action", async () => {
    const expectedAction = [
      {
        type: types.ADD_QTY,
        foodId: 2
      }
    ];
    const store = mockStore({ cart: {} });
    await store.dispatch(cartActions.AddQty(2));
    expect(store.getActions()).toEqual(expectedAction);
  });
  it('should test for error while dispatching the remove from cart action', () => {
    const store = mockStore({ cart: {} });
    const mockFn = jest.spyOn(store, 'dispatch').mockImplementation(() => Promise.reject(Error('error')));
    store.dispatch(cartActions.RemoveFromCart);
    store.dispatch(cartActions.SubtractQty);
    store.dispatch(cartActions.AddQty);
    store.dispatch(cartActions.AddToCart);
    store.dispatch(cartActions.PlaceOrder);
    mockFn.mockReturnValue('error');
  });
  it("dispatches SUBTRACT_QTY action", async () => {
    const expectedAction = [
      {
        type: types.SUBTRACT_QTY,
        foodId: 1
      }
    ];
    const store = mockStore({ cart: {} });
    await store.dispatch(cartActions.SubtractQty(1));
    expect(store.getActions()).toEqual(expectedAction);
  });
  it("dispatches PLACE_ORDER action", async () => {
    jest.spyOn(apiRequests.request, 'post').mockImplementation(() => ({
      data: {
        orders,
        status: 'success'
      }
    }));
    const expectedAction = [
      { type: types.PLACE_ORDER, orders }
    ];
    const store = mockStore({ menu: menuList, orders });
    await store.dispatch(cartActions.PlaceOrder(orders));
    expect(store.getActions()).toEqual(expectedAction);
  });
  it('checks for the error block of post method', async () => {
    jest.spyOn(apiRequests.request, 'post').mockImplementation(() => (
      Promise.reject({ data: 'error' })
    ));
    const store = mockStore({ menu: menuList, orders });
    await store.dispatch(cartActions.PlaceOrder(orders));
  });
});
