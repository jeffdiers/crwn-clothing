import { all, call } from "typed-redux-saga/macro";

import { fetchCollectionsStart } from "./shop/shop.sagas";
import { shopSagas } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSaga } from "./cart/cart.sagas";

export default function* rootSaga() {
  yield* all([
    call(fetchCollectionsStart),
    call(userSagas),
    call(cartSaga),
    call(shopSagas),
  ]);
}
