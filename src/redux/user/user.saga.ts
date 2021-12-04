import {
  auth,
  createUserProfileDocument,
  googleProvider,
} from "src/db/firebase.utils";
import {
  signInWithPopup,
  UserCredential,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { DocumentData, DocumentSnapshot } from "firebase/firestore";

import { AnyAction } from "redux";
import {
  all,
  call,
  takeLatest,
  put,
  PutEffect,
} from "@redux-saga/core/effects";
import { CallEffect } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";
import { SignInSuccess, SignInFailure } from "./user.actions";

import { getErrorMessage } from "src/utils/functions";

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

/* ∨∨∨∨ AUTH FUNCTIONS ∨∨∨∨ */

function* getSnapshotFromUserAuth(
  userAuth: User
): Generator<
  | Promise<UserCredential>
  | CallEffect<DocumentSnapshot<DocumentData> | null>
  | PutEffect
> {
  try {
    const userSnap = (yield call(
      createUserProfileDocument,
      userAuth
    )) as DocumentSnapshot<DocumentData> | null;
    if (!userSnap) throw new Error("User not found in the database.");

    const userData = userSnap.data();

    yield put(
      SignInSuccess({
        id: userSnap ? userSnap.id : "",
        displayName: userData?.displayName,
        createdAt: userData?.createdAt,
        email: userData?.email,
      })
    );
  } catch (error) {
    yield put(SignInFailure(getErrorMessage(error)));
  }
}

function* signInWithGoogle(): Generator {
  try {
    const { user } = (yield signInWithPopup(
      auth,
      googleProvider
    )) as UserCredential;

    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(SignInFailure(getErrorMessage(error)));
  }
}

function* signInWithEmail({
  payload: { email, password },
}: AnyAction): Generator {
  try {
    const { user } = (yield signInWithEmailAndPassword(
      auth,
      email,
      password
    )) as UserCredential;

    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(SignInFailure(getErrorMessage(error)));
  }
}

/* ^^^^ AUTH FUNCTIONS ^^^^ */
