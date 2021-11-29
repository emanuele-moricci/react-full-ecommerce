import { Item } from "../../pages/shop/shop.collections";

export const CartActionTypes = {
  TOGGLE_CART_DROPDOWN: "TOGGLE_CART_DROPDOWN",
  ADD_ITEM: "ADD_ITEM",
};

export type CartItem = Item & {
  quantity: number;
};
