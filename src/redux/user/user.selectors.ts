import { createSelector } from "reselect";
import { RootState } from "../root.store";
import { User } from "./user.types";

const selectUser = (state: RootState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user): User => user.user
);
