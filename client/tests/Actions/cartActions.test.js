import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import sinon from "sinon";
import * as cartActions from "../../actions/cartAction";
import * as types from "../../actions/types";
import * as apiRequests from "../../utilities/apiCalls";
import axios from 'axios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.setTimeout(30000);

describe("test for actions related to cart", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
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
  it("dispatches PLACE_ORER action", async () => {
    const dispatch = jest.fn();
    jest.spyOn(
      apiRequests.Post, ('/orders', [])
    ).mockImplementation(() => Promise.resolve({ status: 201 }));
    const response = { data: { message: "placed" } };
    // jest
    //   .spyOn(axios, 'post')
    //   .mockImplementation(() => Promise.resolve({ status: 201 }));
    await cartActions.PlaceOrder([1, 2])(dispatch);
    expect(dispatch.mock.calls[1]).toEqual({ type: "PLACE_ORDER" });
    expect(dispatch).toHaveBeenCalledTimes(3);
  });
});
