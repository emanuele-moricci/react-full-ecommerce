import { AnyAction } from "redux";
import { ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: null,
};

const shopReducer = (state = INITIAL_STATE, { type, payload }: AnyAction) => {
  switch (type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: payload,
        isFetching: false,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        errorMessage: payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default shopReducer;
