export const ShopActionTypes = {
  FETCH_COLLECTIONS_START: "FETCH_COLLECTIONS_START",
  FETCH_COLLECTIONS_SUCCESS: "FETCH_COLLECTIONS_SUCCESS",
  FETCH_COLLECTIONS_FAILURE: "FETCH_COLLECTIONS_FAILURE",
};

export type Item = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type Collection = {
  id: string;
  title: string;
  routeName: string;
  items: Item[];
};

export type CollectionList = {
  [key: string]: Collection;
};
