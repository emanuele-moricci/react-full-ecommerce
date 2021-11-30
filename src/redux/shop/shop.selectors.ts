import { createSelector } from "reselect";
import { RootState } from "../root.store";

import { Collection, CollectionList } from "./shop.types";

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  ({ collections }: { collections: CollectionList }): Collection[] =>
    Object.keys(collections).map((key: string): Collection => collections[key])
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector(
    [selectShop],
    ({ collections }: { collections: CollectionList }): Collection =>
      collections[collectionUrlParam]
  );
