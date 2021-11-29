import { createSelector } from "reselect";

import { Section } from "./directory.types";

const selectDirectory = (state: any) => state.directory;

export const selectSections = createSelector(
  [selectDirectory],
  (directory): Section[] => directory.sections
);
