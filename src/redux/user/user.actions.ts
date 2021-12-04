import {
  UserActionTypes,
  User,
  UserLogin,
  UserRegister,
} from "src/redux/user/user.types";

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (userLogin: UserLogin) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: userLogin,
});

export const signInSuccess = (user: User) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (msg: string) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: msg,
});

export const signUpStart = (userRegister: UserRegister) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userRegister,
});

export const signUpSuccess = (user: User) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: user,
});

export const signUpFailure = (msg: string) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: msg,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (msg: string) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: msg,
});
