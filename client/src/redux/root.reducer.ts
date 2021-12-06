import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// COMMON
import userReducer from "src/redux/user/user.slice";
import cartReducer from "src/redux/cart/cart.slice";

// PAGE SPECIFIC
import directoryReducer from "src/pages/home/state/directory.slice";
import shopReducer from "src/pages/shop/state/shop.slice";
import checkoutReducer from "src/pages/checkout/state/checkout.slice";

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
