import { takeLatest, call, put, all } from "typed-redux-saga/macro";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

import { SHOP_ACTION_TYPES } from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionsArray = yield* call(getCategoriesAndDocuments);
    yield* put(fetchCollectionsSuccess(collectionsArray));
  } catch (error) {
    yield* put(fetchCollectionsFailure((error as Error).message));
  }
}

export function* fetchCollectionsStart() {
  yield* takeLatest(
    SHOP_ACTION_TYPES.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield* all([call(fetchCollectionsStart)]);
}
