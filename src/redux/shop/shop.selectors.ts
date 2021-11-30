import { createSelector } from "reselect";

import { Collection, CollectionList } from "./shop.types";

const selectShop = (state: any) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop): Collection[] =>
    Object.keys(shop.collections).map((key) => shop.collections[key])
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector(
    [selectShop],
    ({ collections }: { collections: CollectionList }): Collection =>
      collections[collectionUrlParam]
  );
