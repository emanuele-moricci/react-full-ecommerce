import { UserActionTypes, User, UserLogin } from "src/redux/user/user.types";

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (userLogin: UserLogin) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: userLogin,
});

export const SignInSuccess = (user: User) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const SignInFailure = (msg: string) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: msg,
});
