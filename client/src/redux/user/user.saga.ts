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
  createUserWithEmailAndPassword,
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
import { userActions } from "./user.slice";

import { getErrorMessage } from "src/utils/functions";

/* ∨∨∨∨ START FUNCTIONS ∨∨∨∨ */

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onSignUpStart),
    call(onSignOutStart),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
  ]);
}

export function* onCheckUserSession() {
  yield takeLatest(userActions.checkUserSession.type, checkUserSession);
}

export function* onSignUpStart() {
  yield takeLatest(userActions.SignUpStart.type, signUp);
}

export function* onSignOutStart() {
  yield takeLatest(userActions.SignOutStart.type, signOut);
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActions.googleSignInStart.type, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(userActions.EmailSignInStart.type, signInWithEmail);
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
    yield put(userActions.authFailure(getErrorMessage(error)));
  }
}

function* signOut(): Generator<Promise<void> | PutEffect> {
  try {
    yield auth.signOut();

    yield put(userActions.SignOutSuccess());
  } catch (error) {
    yield put(userActions.authFailure(getErrorMessage(error)));
  }
}

/* ^^^^ SESSION FUNCTIONS ^^^^ */

/* ∨∨∨∨ AUTH FUNCTIONS ∨∨∨∨ */

function* signUp({
  payload: { name, email, password },
}: AnyAction): Generator<Promise<UserCredential> | Generator | PutEffect> {
  try {
    const { user } = (yield createUserWithEmailAndPassword(
      auth,
      email,
      password
    )) as UserCredential;

    yield getSnapshotFromUserAuth(user, name);
  } catch (error) {
    yield put(userActions.authFailure(getErrorMessage(error)));
  }
}

function* getSnapshotFromUserAuth(
  userAuth: User,
  registrationName: string | undefined = undefined
): Generator<
  | Promise<UserCredential>
  | CallEffect<DocumentSnapshot<DocumentData> | null>
  | PutEffect
> {
  try {
    const userSnap = (yield call(
      createUserProfileDocument,
      userAuth,
      registrationName
    )) as DocumentSnapshot<DocumentData> | null;
    if (!userSnap) throw new Error("User not found in the database.");

    const userData = userSnap.data();

    yield put(
      userActions.authSuccess({
        id: userSnap ? userSnap.id : "",
        displayName: userData?.displayName,
        createdAt: userData?.createdAt,
        email: userData?.email,
      })
    );
  } catch (error) {
    yield put(userActions.authFailure(getErrorMessage(error)));
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
    yield put(userActions.authFailure(getErrorMessage(error)));
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
    yield put(userActions.authFailure(getErrorMessage(error)));
  }
}

/* ^^^^ AUTH FUNCTIONS ^^^^ */
