import { createSelector } from "reselect";

import { Collection } from "./shop.types";

const COLLECTION_ID_MAP: { [key: string]: number } = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state: any) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop): Collection[] => shop.collections
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector([selectCollections], (collections: Collection[]) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
