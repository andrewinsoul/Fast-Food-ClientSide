import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  PLACE_ORDER,
  ADD_QTY,
  SUBTRACT_QTY
} from "../actions/types";

const prevState = [];

export default (state = prevState, action) => {
  switch (action.type) {
  case ADD_TO_CART:
    return [...state, action.foodItem];
  case REMOVE_FROM_CART:
    return state.filter(item => item.id !== action.foodId);
  case ADD_QTY:
    return state.map(item => (item.id === action.foodId ?
      { ...item, quantity: item.quantity + 1 } :
      item));
  case SUBTRACT_QTY:
    return state.map(item => (item.id === action.foodId ?
      { ...item, quantity: item.quantity - 1 } :
      item));
  case PLACE_ORDER:
    return { success: true, order: action.orders };
  default:
    return state;
  }
};
