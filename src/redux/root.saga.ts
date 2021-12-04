import { all, call } from "redux-saga/effects";

import { userSagas } from "./user/user.saga";
import { cartSagas } from "./cart/cart.sagas";
import { fetchCollectionsStart } from "./shop/shop.saga";

export default function* rootSaga() {
  yield all([call(userSagas), call(cartSagas), call(fetchCollectionsStart)]);
}
