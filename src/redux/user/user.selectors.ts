import { createSelector } from "reselect";

import { User } from "./user.types";

const selectUser = (state: any) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user): User => user.user
);
