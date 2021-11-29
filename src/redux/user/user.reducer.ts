import { AnyAction } from "redux";
import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  user: null,
};

const userReducer = (state = INITIAL_STATE, { type, payload }: AnyAction) => {
  switch (type) {
    case UserActionTypes.SET_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
