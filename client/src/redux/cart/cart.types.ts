import { Item } from "src/redux/shop/shop.types";

export const CartActionTypes = {
  TOGGLE_CART_DROPDOWN: "TOGGLE_CART_DROPDOWN",
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  DELETE_ITEM_FROM_CART: "DELETE_ITEM_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
  UPDATE_CART_ON_DATABASE: "UPDATE_CART_ON_DATABASE",
  SET_CART_FROM_DATABASE: "SET_CART_FROM_DATABASE",
};

export type CartItem = Item & {
  quantity: number;
};
