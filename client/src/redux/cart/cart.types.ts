import { Item } from "src/redux/shop/shop.types";

export type CartItem = Item & {
  quantity: number;
};
