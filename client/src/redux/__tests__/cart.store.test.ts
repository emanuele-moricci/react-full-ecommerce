import reducer from "src/redux/cart/cart.slice";

import { initialState } from "../cart/cart.slice";

import { fakePayloadAction } from "src/utils/testing";

test("should return the initial state", () => {
  expect(reducer(undefined, fakePayloadAction)).toEqual(initialState);
});
