import reducer from "src/redux/user/user.slice";

import { initialState } from "../user/user.slice";

import { fakePayloadAction } from "src/utils/testing";

test("should return the initial state", () => {
  expect(reducer(undefined, fakePayloadAction)).toEqual(initialState);
});
