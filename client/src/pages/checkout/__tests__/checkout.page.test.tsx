import { getMockedStoreRenderedComponent } from "src/utils/testing";

import { initialState as checkoutState } from "../state/checkout.slice";
import { initialState as cartState } from "src/redux/cart/cart.slice";

import Checkout from "src/pages/checkout/checkout.page";

describe("<Checkout />", () => {
  it("Should match the snapshot", () => {
    const component = getMockedStoreRenderedComponent(
      { checkout: checkoutState, cart: cartState },
      Checkout
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
