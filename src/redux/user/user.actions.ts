import { UserActionTypes, User } from "./user.types";

export const setUser = (user: User | null) => ({
  type: UserActionTypes.SET_USER,
  payload: user,
});
