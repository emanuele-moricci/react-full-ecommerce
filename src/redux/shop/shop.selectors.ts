import { createSelector } from "reselect";

import { Collection } from "./shop.types";

const selectShop = (state: any) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop): Collection[] => shop.collections
);
