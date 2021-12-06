import { createSelector } from "reselect";
import { RootState } from "src/redux/root.store";

import { Collection } from "src/pages/shop/state/shop.types";

const selectShop = (state: RootState) => state.shop;

export const selectIsFetching = createSelector(
  [selectShop],
  ({ isFetching }): boolean => isFetching
);

export const selectCollections = createSelector(
  [selectShop],
  ({ collections }): Collection[] =>
    collections
      ? Object.keys(collections).map(
          (key: string): Collection => collections[key]
        )
      : []
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector([selectShop], ({ collections }): Collection | null =>
    collections ? collections[collectionUrlParam] : null
  );
