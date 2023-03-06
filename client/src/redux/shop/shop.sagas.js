import { takeLatest, call, put, all } from "@redux-saga/core/effects";

import { getCollectionsData } from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

import { SHOP_ACTION_TYPES } from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionsArray = yield call(getCollectionsData, "collections");
    yield put(fetchCollectionsSuccess(collectionsArray));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    SHOP_ACTION_TYPES.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
