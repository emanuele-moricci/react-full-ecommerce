import {
  all,
  call,
  takeLatest,
  put,
  PutEffect,
} from "@redux-saga/core/effects";
import { CallEffect } from "redux-saga/effects";

import { UserActionTypes } from "./user.types";
import {
  googleSignInSuccess,
  googleSignInFailure,
  emailSignInSuccess,
  emailSignInFailure,
} from "./user.actions";

import {
  auth,
  createUserProfileDocument,
  googleProvider,
} from "src/db/firebase.utils";
import {
  signInWithPopup,
  UserCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { DocumentData, DocumentSnapshot } from "firebase/firestore";
import { AnyAction } from "redux";

/* ∨∨∨∨ START FUNCTIONS ∨∨∨∨ */

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

/* ^^^^ START FUNCTIONS ^^^^ */

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

function* signInWithEmail({
  payload: { email, password },
}: AnyAction): Generator<
  | Promise<UserCredential>
  | CallEffect<DocumentSnapshot<DocumentData> | null>
  | PutEffect
> {
  try {
    const { user } = (yield signInWithEmailAndPassword(
      auth,
      email,
      password
    )) as UserCredential;
    const userSnap = (yield call(
      createUserProfileDocument,
      user
    )) as DocumentSnapshot<DocumentData> | null;
    if (!userSnap) throw new Error("User not found in the database.");

    const userData = userSnap.data();

    yield put(
      emailSignInSuccess({
        id: userSnap ? userSnap.id : "",
        displayName: userData?.displayName,
        createdAt: userData?.createdAt,
        email: userData?.email,
      })
    );
  } catch (error) {
    const msg = error instanceof Error ? error.message : "";

    yield put(emailSignInFailure(msg));
  }
}
