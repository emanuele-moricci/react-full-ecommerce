import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "src/redux/root.reducer";

const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);
const appStore = { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export default appStore;
