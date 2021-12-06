import { createSelector } from "reselect";
import { RootState } from "src/redux/root.store";
import { User } from "src/redux/user/user.types";

const selectUser = (state: RootState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user): User | null => user.user
);
