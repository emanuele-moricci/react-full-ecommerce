import { User } from "./user.types";
import { UserActionTypes } from "./user.types";

export const setUser = (user: User | null) => ({
  type: UserActionTypes.SET_USER,
  payload: user,
});
