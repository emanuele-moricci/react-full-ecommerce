import axios, { AxiosPromise } from "axios";
import { AnyAction } from "redux";
import { all, call, takeLatest, put, PutEffect } from "redux-saga/effects";

import { checkoutActions } from "./checkout.slice";
import { cartActions } from "src/redux/cart/cart.slice";
import { getErrorMessage } from "src/utils/functions";

/* ∨∨∨∨ START FUNCTIONS ∨∨∨∨ */

export function* checkoutSagas() {
  yield all([call(onCheckoutStart)]);
}

export function* onCheckoutStart() {
  yield takeLatest(checkoutActions.checkoutStart.type, checkout);
}

/* ^^^^ START FUNCTIONS ^^^^ */

function* checkout({
  payload,
}: AnyAction): Generator<AxiosPromise | PutEffect> {
  try {
    yield axios({
      url: "payment",
      method: "post",
      data: { amount: payload.total, token: payload.token },
    });

    yield put(checkoutActions.checkoutSuccess());
    yield put(cartActions.clearCart());
    yield put(cartActions.updateCartOnDatabase());
  } catch (error) {
    yield put(checkoutActions.checkoutFailure(getErrorMessage(error)));
  }
}
