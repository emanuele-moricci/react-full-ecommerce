import { createSelector } from "reselect";

import { RootState } from "../root.store";
import { Section } from "./directory.types";

const selectDirectory = (state: RootState) => state.directory;

export const selectSections = createSelector(
  [selectDirectory],
  (directory): Section[] => directory.sections
);
