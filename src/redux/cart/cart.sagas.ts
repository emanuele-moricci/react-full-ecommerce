import { all, call, takeLatest, put, PutEffect } from "redux-saga/effects";

import { UserActionTypes } from "../user/user.types";
import { clearCart } from "./cart.actions";

/* ∨∨∨∨ START FUNCTIONS ∨∨∨∨ */

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

/* ^^^^ START FUNCTIONS ^^^^ */

function* clearCartOnSignOut(): Generator<PutEffect> {
  yield put(clearCart());
}
