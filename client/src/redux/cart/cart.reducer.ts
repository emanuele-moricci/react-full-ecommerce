import { AnyAction } from "redux";
import { CartActionTypes } from "src/redux/cart/cart.types";
import {
  addItem,
  removeItem,
  deleteItemFromCart,
} from "src/redux/cart/cart.utils";

const INITIAL_STATE = {
  hidden: true,
  items: [],
};

const cartReducer = (state = INITIAL_STATE, { type, payload }: AnyAction) => {
  switch (type) {
    case CartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItem(state.items, payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: removeItem(state.items, payload),
      };
    case CartActionTypes.DELETE_ITEM_FROM_CART:
      return {
        ...state,
        items: deleteItemFromCart(state.items, payload),
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    case CartActionTypes.SET_CART_FROM_DATABASE:
      return {
        ...state,
        items: payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
