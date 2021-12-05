import { createSelector } from "reselect";

import { RootState } from "src/redux/root.store";

const selectCheckout = (state: RootState) => state.checkout;

export const selectCheckoutPurchasing = createSelector(
  [selectCheckout],
  (checkout): boolean => checkout.purchasing
);
