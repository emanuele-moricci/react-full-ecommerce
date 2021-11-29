import { Item } from "../../pages/shop/shop.collections";
import { CartItem } from "./cart.types";

export const addItemToCart = (
  cartItems: CartItem[],
  cartItemToAdd: Item
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : { ...cartItem, quantity: 1 }
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
