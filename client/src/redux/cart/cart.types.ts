import { Item } from "src/pages/shop/state/shop.types";

export type CartItem = Item & {
  quantity: number;
};
