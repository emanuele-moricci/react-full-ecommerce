import { Item } from "src/redux/shop/shop.types";
import { CartItem } from "src/redux/cart/cart.types";

export const addItem = (
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
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItem = (
  cartItems: CartItem[],
  cartItemToRemove: Item
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem?.quantity === 1) {
    return deleteItemFromCart(cartItems, cartItemToRemove);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const deleteItemFromCart = (
  cartItems: CartItem[],
  cartItemToDelete: Item
): CartItem[] => {
  return cartItems.filter((cartItems) => cartItems.id !== cartItemToDelete.id);
};
