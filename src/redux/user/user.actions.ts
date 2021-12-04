import { UserActionTypes, User, UserLogin } from "src/redux/user/user.types";

export const setUser = (user: User | null) => ({
  type: UserActionTypes.SET_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = (user: User) => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

export const googleSignInFailure = (msg: string) => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: msg,
});

export const emailSignInStart = (userLogin: UserLogin) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: userLogin,
});

export const emailSignInSuccess = (user: User) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user,
});

export const emailSignInFailure = (msg: string) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: msg,
});
