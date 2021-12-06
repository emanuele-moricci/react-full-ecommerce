import { all, call } from "redux-saga/effects";

// COMMON
import { userSagas } from "./user/user.saga";
import { cartSagas } from "./cart/cart.sagas";

// PAGE SPECIFIC
import { shopSagas } from "src/pages/shop/state/shop.saga";
import { checkoutSagas } from "src/pages/checkout/state/checkout.saga";

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(cartSagas),
    call(shopSagas),
    call(checkoutSagas),
  ]);
}
