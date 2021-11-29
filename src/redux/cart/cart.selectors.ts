import { createSelector } from "reselect";

import { CartItem } from "./cart.types";

const selectCart = (state: any) => state.cart;

export const selectItems = createSelector([selectCart], (cart) => cart.items);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart): boolean => cart.hidden
);

export const selectItemsCount = createSelector(
  [selectItems],
  (items: CartItem[]): number =>
    items.reduce(
      (currQuant: number, cartItem: CartItem) => currQuant + cartItem.quantity,
      0
    )
);
