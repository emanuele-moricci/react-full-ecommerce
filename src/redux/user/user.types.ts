import { Timestamp } from "@firebase/firestore";

export const UserActionTypes = {
  SET_USER: "SET_USER",
};

export type User = {
  id: string;
  displayName: string;
  email: string;
  createdAt: Timestamp;
};
