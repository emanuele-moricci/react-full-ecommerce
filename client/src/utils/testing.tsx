import { FC } from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

export const fakePayloadAction = { type: "FAKE_PAYLOAD" };

export const getMockedStoreRenderedComponent = (state: any, Component: FC) => {
  const mockStore = configureStore();
  const store = mockStore(state);

  return renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>
  );
};
