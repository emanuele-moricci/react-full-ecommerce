import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CollectionList } from "./shop.types";

type InitialStateType = {
  collections: null | CollectionList;
  isFetching: boolean;
  errorMessage: string | null;
};

const initialState: InitialStateType = {
  collections: null,
  isFetching: false,
  errorMessage: null,
};

const slice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    fetchCollectionsStart: (state) => {
      state.isFetching = true;
      state.errorMessage = null;
    },
    fetchCollectionsSuccess: (
      state,
      { payload }: PayloadAction<CollectionList>
    ) => {
      state.isFetching = false;
      state.collections = payload;
    },
    fetchCollectionsFailure: (state, { payload }: PayloadAction<string>) => {
      state.isFetching = false;
      state.errorMessage = payload;
    },
  },
});

export const shopActions = slice.actions;
export default slice.reducer;
