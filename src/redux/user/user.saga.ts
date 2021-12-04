import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
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
import { signInSuccess, signInFailure, signOutSuccess } from "./user.actions";

import { getErrorMessage } from "src/utils/functions";

/* ∨∨∨∨ START FUNCTIONS ∨∨∨∨ */

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
  ]);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, checkUserSession);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

/* ^^^^ START FUNCTIONS ^^^^ */

/* ∨∨∨∨ SESSION FUNCTIONS ∨∨∨∨ */

function* checkUserSession(): Generator<
  Promise<User | null> | Generator | PutEffect
> {
  try {
    const userAuth = (yield getCurrentUser()) as User | null;
    if (!userAuth) return;

    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(getErrorMessage(error)));
  }
}

function* signOut(): Generator<Promise<void> | PutEffect> {
  try {
    yield auth.signOut();

    yield put(signOutSuccess());
  } catch (error) {
    yield put(signInFailure(getErrorMessage(error)));
  }
}

/* ^^^^ SESSION FUNCTIONS ^^^^ */

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
      signInSuccess({
        id: userSnap ? userSnap.id : "",
        displayName: userData?.displayName,
        createdAt: userData?.createdAt,
        email: userData?.email,
      })
    );
  } catch (error) {
    yield put(signInFailure(getErrorMessage(error)));
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
    yield put(signInFailure(getErrorMessage(error)));
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
    yield put(signInFailure(getErrorMessage(error)));
  }
}

/* ^^^^ AUTH FUNCTIONS ^^^^ */
