import reducer from "src/pages/checkout/state/checkout.slice";

import { initialState } from "src/pages/checkout/state/checkout.slice";

import { fakePayloadAction } from "src/utils/testing";

test("should return the initial state", () => {
  expect(reducer(undefined, fakePayloadAction)).toEqual(initialState);
});
