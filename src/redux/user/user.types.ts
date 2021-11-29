import { Timestamp } from "@firebase/firestore";

export type User = {
  id: string;
  displayName: string;
  email: string;
  createdAt: Timestamp;
};

export const UserActionTypes = {
  SET_USER: "SET_USER",
};
