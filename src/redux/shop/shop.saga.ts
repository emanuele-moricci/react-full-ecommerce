import {
  collection,
  DocumentData,
  getDocs,
  QuerySnapshot,
} from "firebase/firestore";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "src/db/firebase.utils";

import {
  all,
  call,
  takeLatest,
  put,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";

import { CollectionList, ShopActionTypes } from "./shop.types";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";

/* ∨∨∨∨ START FUNCTIONS ∨∨∨∨ */

export function* shopSagas() {
  yield all([call(onFetchCollectionsStart)]);
}

export function* onFetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

/* ^^^^ START FUNCTIONS ^^^^ */

export function* fetchCollectionsAsync(): Generator<
  Promise<QuerySnapshot<DocumentData>> | CallEffect<CollectionList> | PutEffect
> {
  try {
    const collectionRef = collection(firestore, "collections");
    const snapshot = (yield getDocs(
      collectionRef
    )) as QuerySnapshot<DocumentData>;

    const collectionsMap = (yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    )) as CollectionList;

    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    const msg = error instanceof Error ? error.message : "";

    yield put(fetchCollectionsFailure(msg));
  }
}
