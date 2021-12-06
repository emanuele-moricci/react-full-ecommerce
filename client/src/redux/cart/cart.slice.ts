import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./cart.types";
import { Item } from "src/pages/shop/state/shop.types";
import { addItem, deleteItemFromCart, removeItem } from "./cart.utils";

type InitialStateType = {
  hidden: boolean;
  items: CartItem[];
};

export const initialState: InitialStateType = {
  hidden: true,
  items: [],
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartDropdown: (state) => {
      state.hidden = !state.hidden;
    },
    addItem: (state, { payload }: PayloadAction<Item>) => {
      state.items = addItem(state.items, payload);
    },
    removeItem: (state, { payload }: PayloadAction<Item>) => {
      state.items = removeItem(state.items, payload);
    },
    deleteItemFromCart: (state, { payload }: PayloadAction<Item>) => {
      state.items = deleteItemFromCart(state.items, payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    setCartFromDatabase: (state, { payload }: PayloadAction<CartItem[]>) => {
      state.items = payload;
    },
    updateCartOnDatabase: () => {},
  },
});

export const cartActions = slice.actions;
export default slice.reducer;
