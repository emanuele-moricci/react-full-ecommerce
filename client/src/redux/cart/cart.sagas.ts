import {
  all,
  call,
  takeLatest,
  put,
  PutEffect,
  select,
} from "redux-saga/effects";

import { User, UserActionTypes } from "../user/user.types";
import { CartActionTypes } from "./cart.types";
import { clearCart, setCartFromDatabase } from "./cart.actions";
import { getUserCartRef } from "src/db/firebase.utils";
import {
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
  updateDoc,
} from "@firebase/firestore";
import { AnyAction } from "redux";
import { selectCurrentUser } from "../user/user.selectors";
import { selectItems } from "./cart.selectors";
import { Item } from "../shop/shop.types";

/* ∨∨∨∨ START FUNCTIONS ∨∨∨∨ */

export function* cartSagas() {
  yield all([
    call(onSignInSuccess),
    call(onSignOutSuccess),
    call(onCartChange),
  ]);
}

export function* onSignInSuccess() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromDatabase);
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onCartChange() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.DELETE_ITEM_FROM_CART,
      CartActionTypes.UPDATE_CART_ON_DATABASE,
    ],
    updateCartOnDatabase
  );
}

/* ^^^^ START FUNCTIONS ^^^^ */

function* clearCartOnSignOut(): Generator<PutEffect> {
  yield put(clearCart());
}

export function* checkCartFromDatabase({ payload }: AnyAction): Generator {
  const cartRef = (yield getUserCartRef(
    payload.id
  )) as DocumentReference<DocumentData>;
  const cartSnapshot = (yield getDoc(
    cartRef
  )) as DocumentSnapshot<DocumentData>;
  yield put(setCartFromDatabase(cartSnapshot.data()?.cartItems));
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
