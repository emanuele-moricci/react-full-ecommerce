import { createSelector } from "reselect";

import { RootState } from "src/redux/root.store";
import { Section } from "src/pages/home/state/directory.types";

const selectDirectory = (state: RootState) => state.directory;

export const selectSections = createSelector(
  [selectDirectory],
  (directory): Section[] => directory.sections
);
