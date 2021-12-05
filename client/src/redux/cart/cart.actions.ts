import { Item } from "src/redux/shop/shop.types";
import { CartActionTypes } from "src/redux/cart/cart.types";

export const toggleCartDropdown = () => ({
  type: CartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItem = (item: Item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item: Item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const deleteItemFromCart = (item: Item) => ({
  type: CartActionTypes.DELETE_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});

export const updateCartOnDatabase = () => ({
  type: CartActionTypes.UPDATE_CART_IN_DATABASE,
});

export const setCartFromDatabase = (cartItems: Item[]) => ({
  type: CartActionTypes.SET_CART_FROM_DATABASE,
  payload: cartItems,
});
