import { createSlice } from "@reduxjs/toolkit";
import { Section } from "./directory.types";
import { sections } from "./directory.utils";

type InitialStateType = {
  sections: Section[];
};

export const initialState: InitialStateType = {
  sections: sections,
};

const slice = createSlice({
  name: "directory",
  initialState,
  reducers: {},
});

export const directoryActions = slice.actions;
export default slice.reducer;
