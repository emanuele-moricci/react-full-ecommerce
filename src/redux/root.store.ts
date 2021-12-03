import { createStore, applyMiddleware, Middleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import rootReducer from "src/redux/root.reducer";

const middlewares: Middleware[] = [thunk];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);
const appStore = { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export default appStore;
