import { AnyAction } from "redux";
import { CheckoutActionTypes } from "src/redux/checkout/checkout.types";

const INITIAL_STATE = {
  purchasing: false,
  errorMessage: null,
};

const cartReducer = (state = INITIAL_STATE, { type, payload }: AnyAction) => {
  switch (type) {
    case CheckoutActionTypes.CHECKOUT_START:
      return {
        ...state,
        purchasing: true,
      };
    case CheckoutActionTypes.CHECKOUT_SUCCESS:
      return {
        ...state,
        purchasing: false,
        errorMessage: false,
      };
    case CheckoutActionTypes.CHECKOUT_FAILURE:
      return {
        ...state,
        purchasing: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
