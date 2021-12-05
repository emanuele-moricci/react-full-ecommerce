import { Token } from "react-stripe-checkout";

import { CheckoutActionTypes } from "./checkout.types";

export const checkoutStart = (payload: { token: Token; total: number }) => ({
  type: CheckoutActionTypes.CHECKOUT_START,
  payload,
});

export const checkoutSuccess = () => ({
  type: CheckoutActionTypes.CHECKOUT_SUCCESS,
});
export const checkoutFailure = (msg: string) => ({
  type: CheckoutActionTypes.CHECKOUT_FAILURE,
  payload: msg,
});
