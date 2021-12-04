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
