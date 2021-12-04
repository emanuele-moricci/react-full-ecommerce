import { AnyAction } from "redux";
import { UserActionTypes } from "src/redux/user/user.types";

const INITIAL_STATE = {
  user: null,
  errorMessage: null,
};

const userReducer = (state = INITIAL_STATE, { type, payload }: AnyAction) => {
  switch (type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: payload,
        errorMessage: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        errorMessage: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
