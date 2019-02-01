import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  PLACE_ORDER,
  ADD_QTY,
  SUBTRACT_QTY,
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

export const AddToCart = foodItem => dispatch => {
  try {
    dispatch(addToCart(foodItem));
    return ({
      success: true,
    });
  } catch (error) {
    Promise.reject(error);
  }
};

export const AddQty = foodId => dispatch => {
  try {
    dispatch(addQty(foodId));
  } catch (error) {
    Promise.reject(error);
  }
};

export const SubtractQty = foodId => dispatch => {
  try {
    dispatch(subtractQty(foodId));
  } catch (error) {
    Promise.reject(error);
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
  }
};

export const PlaceOrder = orders => async dispatch => {
  try {
    const res = await Post('/orders', orders);
    console.log('ORDER PLACED =====> ', res);
    if (res.status === 'success') {
      dispatch(placeOrder(res.orders));
      return {
        success: true,
        totalAmount: res.SUMTOTAL,
        data: res.orders
      };
    }
  } catch (error) {
    Promise.reject(error);
  }
};
