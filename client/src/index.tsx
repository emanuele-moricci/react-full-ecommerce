import React from "react";
import ReactDOM from "react-dom";

import { PersistGate } from "redux-persist/integration/react";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import appStore from "src/redux/root.store";
import App from "src/pages/App";

import * as serviceWorker from "src/pwa/serviceWorkerRegistration";

import GlobalStyles from "src/assets/global.styles";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore.store}>
      <BrowserRouter>
        <PersistGate persistor={appStore.persistor}>
          <GlobalStyles />
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// PWA settings
serviceWorker.register();
