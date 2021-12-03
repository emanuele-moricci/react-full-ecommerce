import { collection, getDocs } from "firebase/firestore";
import { Dispatch } from "redux";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "src/db/firebase.utils";
import { CollectionList, ShopActionTypes } from "src/redux/shop/shop.types";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap: CollectionList) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (msg: string) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: msg,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchCollectionsStart());

    const collectionRef = collection(firestore, "collections");
    getDocs(collectionRef)
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((err: Error) => dispatch(fetchCollectionsFailure(err.message)));
  };
};
