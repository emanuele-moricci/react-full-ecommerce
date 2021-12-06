import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CheckoutData } from "./checkout.types";

type InitialStateType = {
  purchasing: boolean;
  errorMessage: null | string;
};

export const initialState: InitialStateType = {
  purchasing: false,
  errorMessage: null,
};

const slice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    checkoutStart: (state, action: PayloadAction<CheckoutData>) => {
      state.purchasing = true;
      state.errorMessage = null;
    },
    checkoutSuccess: (state) => {
      state.purchasing = false;
    },
    checkoutFailure: (state, { payload }: PayloadAction<string>) => {
      state.purchasing = false;
      state.errorMessage = payload;
    },
  },
});

export const checkoutActions = slice.actions;
export default slice.reducer;
