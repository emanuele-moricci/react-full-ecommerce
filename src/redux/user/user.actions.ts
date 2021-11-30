import { UserActionTypes, User } from "src/redux/user/user.types";

export const setUser = (user: User | null) => ({
  type: UserActionTypes.SET_USER,
  payload: user,
});
