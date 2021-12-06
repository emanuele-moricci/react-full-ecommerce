import { getMockedStoreRenderedComponent } from "src/utils/testing";

import { initialState } from "../state/shop.slice";

import Shop from "src/pages/shop/shop.page";

describe("<Shop />", () => {
  it("Should match the snapshot", () => {
    const component = getMockedStoreRenderedComponent(
      { shop: initialState },
      Shop
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
