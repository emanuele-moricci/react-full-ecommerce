import { Token } from "react-stripe-checkout";

export type CheckoutData = {
  token: Token;
  total: number;
};
