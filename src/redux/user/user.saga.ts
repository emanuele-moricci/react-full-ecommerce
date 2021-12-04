import {
  all,
  call,
  takeLatest,
  put,
  PutEffect,
} from "@redux-saga/core/effects";
import { CallEffect } from "redux-saga/effects";

import { UserActionTypes } from "./user.types";
import { googleSignInSuccess, googleSignInFailure } from "./user.actions";

import {
  auth,
  createUserProfileDocument,
  googleProvider,
} from "src/db/firebase.utils";
import { signInWithPopup, UserCredential } from "firebase/auth";
import { DocumentData, DocumentSnapshot } from "firebase/firestore";

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* signInWithGoogle(): Generator<
  | Promise<UserCredential>
  | CallEffect<DocumentSnapshot<DocumentData> | null>
  | PutEffect
> {
  try {
    const { user } = (yield signInWithPopup(
      auth,
      googleProvider
    )) as UserCredential;
    const userSnap = (yield call(
      createUserProfileDocument,
      user
    )) as DocumentSnapshot<DocumentData> | null;
    if (!userSnap) throw new Error("User not found in the database.");

    const userData = userSnap.data();

    yield put(
      googleSignInSuccess({
        id: userSnap ? userSnap.id : "",
        displayName: userData?.displayName,
        createdAt: userData?.createdAt,
        email: userData?.email,
      })
    );
  } catch (error) {
    const msg = error instanceof Error ? error.message : "";

    yield put(googleSignInFailure(msg));
  }
}
