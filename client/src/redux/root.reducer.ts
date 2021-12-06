import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "src/redux/user/user.slice";
import cartReducer from "src/redux/cart/cart.slice";
import directoryReducer from "src/redux/directory/directory.slice";
import shopReducer from "src/redux/shop/shop.slice";
import checkoutReducer from "src/redux/checkout/checkout.slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  checkout: checkoutReducer,
});

export default persistReducer(persistConfig, rootReducer);
