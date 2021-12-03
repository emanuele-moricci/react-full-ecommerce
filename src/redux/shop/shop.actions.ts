import { CollectionList, ShopActionTypes } from "src/redux/shop/shop.types";

export const updateCollections = (collectionsMap: CollectionList | null) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
