import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  PLACE_ORDER,
  ADD_QTY,
  SUBTRACT_QTY,
  HANDLE_EMPTY_CART,
} from './types';
import { Post } from '../utilities/apiCalls';

const addToCart = foodItem => ({
  foodItem,
  type: ADD_TO_CART,
});

const removeFromCart = foodId => ({
  foodId,
  type: REMOVE_FROM_CART,
});

const placeOrder = orders => ({
  orders,
  type: PLACE_ORDER
});

const addQty = foodId => ({
  type: ADD_QTY,
  foodId
});

const subtractQty = foodId => ({
  type: SUBTRACT_QTY,
  foodId
});

const handleEmptyCart = () => ({
  type: HANDLE_EMPTY_CART,
  res: []
});

export const AddToCart = foodItem => dispatch => {
  try {
    dispatch(addToCart(foodItem));
    return ({
      success: true,
    });
  } catch (error) {
    Promise.reject(error);
    return 'error';
  }
};

export const AddQty = foodId => dispatch => {
  try {
    dispatch(addQty(foodId));
  } catch (error) {
    Promise.reject(error);
    return 'error';
  }
};

export const SubtractQty = foodId => dispatch => {
  try {
    dispatch(subtractQty(foodId));
  } catch (error) {
    Promise.reject(error);
    return 'error';
  }
};

export const RemoveFromCart = (foodId) => dispatch => {
  try {
    dispatch(removeFromCart(foodId));
    return ({
      success: true,
      foodId
    });
  } catch (error) {
    Promise.reject(error);
    return 'error';
  }
};

export const PlaceOrder = orders => async dispatch => {
  try {
    if (orders.length === 0) {
      dispatch(handleEmptyCart());
      return {
        success: false,
        error: 'please fill cart, cannot place order on empty cart'
      };
    }
    const newOrder = orders.map(item => ({ ...item, foodId: item.id }));
    const res = await Post('/orders', { orders: newOrder });
    if (res.status === 'success') {
      dispatch(placeOrder(orders));
      return {
        success: true,
        totalAmount: res.SUMTOTAL,
        data: res.orders
      };
    }
  } catch (error) {
    Promise.reject(error);
    return 'error';
  }
};
