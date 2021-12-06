import reducer from "src/pages/home/state/directory.slice";

import { initialState } from "src/pages/home/state/directory.slice";

import { fakePayloadAction } from "src/utils/testing";

test("should return the initial state", () => {
  expect(reducer(undefined, fakePayloadAction)).toEqual(initialState);
});
