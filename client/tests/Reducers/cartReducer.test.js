import reducer from '../../reducers/cartReducer';
import * as types from '../../actions/types';

describe('test reducers for cart actions', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
  it('should handle ADD_TO_CART', () => {
    const addToCartAction = {
      type: types.ADD_TO_CART,
      foodItem: 'Burger'
    };
    expect(reducer([], addToCartAction)).toEqual['Burger'];
  });
  it('should handle REMOVE_FROM_CART', () => {
    const removeFromCartAction = {
      type: types.REMOVE_FROM_CART,
      foodItem: 'Burger'
    };
    expect(reducer([], removeFromCartAction)).toEqual['Burger'];
  });
  it('should handle ADD_QTY', () => {
    const addQtyAction = {
      type: types.ADD_QTY,
      foodItem: 'Burger'
    };
    expect(reducer([], addQtyAction)).toEqual['Burger'];
  });
  it('should handle SUBTRACT_QTY', () => {
    const subtractQtyAction = {
      type: types.SUBTRACT_QTY,
      foodItem: 'Burger'
    };
    expect(reducer([], subtractQtyAction)).toEqual['Burger'];
  });
  it('should handle PLACE_ORDER', () => {
    const placeOrderAction = {
      type: types.PLACE_ORDER,
      orders: [{ foodItem: 'Burger' }]
    };
    expect(reducer([], placeOrderAction)).toEqual({
      success: true,
      order: [{ foodItem: 'Burger' }]
    });
  });
});
