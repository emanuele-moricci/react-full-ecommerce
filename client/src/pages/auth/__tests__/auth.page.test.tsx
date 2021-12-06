import { getMockedStoreRenderedComponent } from "src/utils/testing";

import Auth from "src/pages/auth/auth.page";

describe("<Auth />", () => {
  it("Should match the snapshot", () => {
    const component = getMockedStoreRenderedComponent({}, Auth);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
