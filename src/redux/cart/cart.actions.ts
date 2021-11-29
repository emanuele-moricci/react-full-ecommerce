import { Item } from "../shop/shop.types";
import { CartActionTypes } from "./cart.types";

export const toggleCartDropdown = () => ({
  type: CartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItem = (item: Item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item: Item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const deleteItemFromCart = (item: Item) => ({
  type: CartActionTypes.DELETE_ITEM_FROM_CART,
  payload: item,
});
