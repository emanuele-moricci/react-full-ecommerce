import { createSelector } from "reselect";
import { RootState } from "src/redux/root.store";

import { Collection, CollectionList } from "src/redux/shop/shop.types";

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  ({ collections }: { collections: CollectionList }): Collection[] =>
    collections
      ? Object.keys(collections).map(
          (key: string): Collection => collections[key]
        )
      : []
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector(
    [selectShop],
    ({ collections }: { collections: CollectionList }): Collection | null =>
      collections ? collections[collectionUrlParam] : null
  );
