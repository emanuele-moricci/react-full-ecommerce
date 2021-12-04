import { Timestamp } from "@firebase/firestore";

export const UserActionTypes = {
  SET_USER: "SET_USER",
  GOOGLE_SIGN_IN_START: "GOOGLE_SIGN_IN_START",
  GOOGLE_SIGN_IN_SUCCESS: "GOOGLE_SIGN_IN_SUCCESS",
  GOOGLE_SIGN_IN_FAILURE: "GOOGLE_SIGN_IN_FAILURE",
  EMAIL_SIGN_IN_START: "EMAIL_SIGN_IN_START",
  EMAIL_SIGN_IN_SUCCESS: "EMAIL_SIGN_IN_SUCCESS",
  EMAIL_SIGN_IN_FAILURE: "EMAIL_SIGN_IN_FAILURE",
};

export type User = {
  id: string;
  displayName: string;
  email: string;
  createdAt: Timestamp;
};

export type UserLogin = {
  email: string;
  password: string;
};
