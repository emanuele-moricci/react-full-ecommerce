import { getMockedStoreRenderedComponent } from "src/utils/testing";

import { initialState } from "../state/directory.slice";

import Home from "src/pages/home/home.page";

describe("<Home />", () => {
  it("Should match the snapshot", () => {
    const component = getMockedStoreRenderedComponent(
      { directory: initialState },
      Home
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
