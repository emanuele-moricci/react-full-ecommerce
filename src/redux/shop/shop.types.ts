export const ShopActionTypes = {
  UPDATE_COLLECTIONS: "UPDATE_COLLECTIONS",
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
