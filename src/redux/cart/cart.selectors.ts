import { createSelector } from "reselect";

import { CartItem } from "./cart.types";

const selectCart = (state: any) => state.cart;

export const selectItems = createSelector([selectCart], (cart) => cart.items);

export const selectItemsCount = createSelector(
  [selectItems],
  (items: CartItem[]) =>
    items.reduce(
      (currQuant: number, cartItem: CartItem) => currQuant + cartItem.quantity,
      0
    )
);
