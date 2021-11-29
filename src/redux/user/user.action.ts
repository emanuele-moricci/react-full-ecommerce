import { User } from "./user.type";

export const setUser = (user: User | null) => ({
  type: "SET_USER",
  payload: user,
});
