import { Item } from "../../pages/shop/shop.collections";

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
