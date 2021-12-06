import { Timestamp } from "@firebase/firestore";

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

export type UserRegister = UserLogin & {
  name: string;
};
