import { Timestamp } from "@firebase/firestore";

export type User = {
  id: string;
  displayName: string;
  email: string;
  createdAt: Timestamp;
};
