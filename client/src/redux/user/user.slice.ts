import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserLogin, UserRegister } from "src/redux/user/user.types";

type InitialStateType = {
  user: User | null;
  errorMessage: string | null;
};

export const initialState: InitialStateType = {
  user: null,
  errorMessage: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    checkUserSession: () => {},
    googleSignInStart: () => {},
    EmailSignInStart: (state, { payload }: PayloadAction<UserLogin>) => {},
    SignUpStart: (state, { payload }: PayloadAction<UserRegister>) => {},
    SignOutStart: () => {},
    authSuccess: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
      state.errorMessage = null;
    },
    SignOutSuccess: (state) => {
      state.user = null;
      state.errorMessage = null;
    },
    authFailure: (state, { payload }: PayloadAction<string>) => {
      state.errorMessage = payload;
    },
  },
});

export const userActions = slice.actions;
export default slice.reducer;
