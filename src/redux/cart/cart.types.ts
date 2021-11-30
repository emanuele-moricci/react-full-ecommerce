import { Item } from "src/redux/shop/shop.types";

export const CartActionTypes = {
  TOGGLE_CART_DROPDOWN: "TOGGLE_CART_DROPDOWN",
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  DELETE_ITEM_FROM_CART: "DELETE_ITEM_FROM_CART",
};

export type CartItem = Item & {
  quantity: number;
};
