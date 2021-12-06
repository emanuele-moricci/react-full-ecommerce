import reducer from "src/pages/shop/state/shop.slice";

import { initialState } from "../state/shop.slice";

import { fakePayloadAction } from "src/utils/testing";

test("should return the initial state", () => {
  expect(reducer(undefined, fakePayloadAction)).toEqual(initialState);
});
