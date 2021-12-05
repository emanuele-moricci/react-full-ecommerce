import { createStore, applyMiddleware, Middleware } from "redux";
import { createLogger } from "redux-logger";
import { persistStore } from "redux-persist";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.saga";

import rootReducer from "src/redux/root.reducer";

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  const logger = createLogger({
    collapsed: () => true,
  });

  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);
const appStore = { store, persistor };

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default appStore;
