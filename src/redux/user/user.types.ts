import { Timestamp } from "@firebase/firestore";

export const UserActionTypes = {
  GOOGLE_SIGN_IN_START: "GOOGLE_SIGN_IN_START",
  EMAIL_SIGN_IN_START: "EMAIL_SIGN_IN_START",
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  SIGN_IN_FAILURE: "SIGN_IN_FAILURE",
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
