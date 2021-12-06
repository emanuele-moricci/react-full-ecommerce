import { AnyAction } from "redux";
import {
  all,
  call,
  takeLatest,
  put,
  PutEffect,
  select,
} from "redux-saga/effects";

import { cartActions } from "./cart.slice";
import { userActions } from "src/redux/user/user.slice";
import { Item } from "src/pages/shop/state/shop.types";
import { User } from "src/redux/user/user.types";
import { selectItems } from "./cart.selectors";
import { selectCurrentUser } from "src/redux/user/user.selectors";

import { getUserCartRef } from "src/db/firebase.utils";
import {
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
  updateDoc,
} from "@firebase/firestore";

/* ∨∨∨∨ START FUNCTIONS ∨∨∨∨ */

export function* cartSagas() {
  yield all([
    call(onSignInSuccess),
    call(onSignOutSuccess),
    call(onCartChange),
  ]);
}

export function* onSignInSuccess() {
  yield takeLatest(userActions.authSuccess.type, checkCartFromDatabase);
}

export function* onSignOutSuccess() {
  yield takeLatest(userActions.SignOutSuccess.type, clearCartOnSignOut);
}

export function* onCartChange() {
  yield takeLatest(
    [
      cartActions.addItem.type,
      cartActions.removeItem.type,
      cartActions.deleteItemFromCart.type,
      cartActions.updateCartOnDatabase.type,
    ],
    updateCartOnDatabase
  );
}

/* ^^^^ START FUNCTIONS ^^^^ */

function* clearCartOnSignOut(): Generator<PutEffect> {
  yield put(cartActions.clearCart());
}

export function* checkCartFromDatabase({ payload }: AnyAction): Generator {
  const cartRef = (yield getUserCartRef(
    payload.id
  )) as DocumentReference<DocumentData>;
  const cartSnapshot = (yield getDoc(
    cartRef
  )) as DocumentSnapshot<DocumentData>;
  yield put(cartActions.setCartFromDatabase(cartSnapshot.data()?.cartItems));
}

function* updateCartOnDatabase(): Generator {
  const currentUser = (yield select(selectCurrentUser)) as User;
  if (currentUser) {
    try {
      const cartRef = (yield getUserCartRef(
        currentUser.id
      )) as DocumentReference<DocumentData>;
      const cartItems = (yield select(selectItems)) as Item[];

      yield updateDoc(cartRef, { cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}
