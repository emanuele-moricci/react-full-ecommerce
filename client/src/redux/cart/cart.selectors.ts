import { createSelector } from "reselect";

import { RootState } from "src/redux/root.store";
import { CartItem } from "src/redux/cart/cart.types";

// Weirdly, the following selectors are not working as expected.
// This is a momentary workaround.
type CartState = Omit<RootState, "cart"> & {
  cart: {
    hidden: boolean;
    items: CartItem[];
  };
};

const selectCart = (state: CartState) => state.cart;

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

export const selectCartTotal = createSelector(
  [selectItems],
  (items: CartItem[]): number =>
    items.reduce(
      (currCost: number, cartItem: CartItem) =>
        currCost + cartItem.quantity * cartItem.price,
      0
    )
);
