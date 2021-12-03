import { AnyAction } from "redux";
import { ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  collections: null,
};

const shopReducer = (state = INITIAL_STATE, { type, payload }: AnyAction) => {
  switch (type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
