import { SHOP_ACTION_TYPES, CollectionsMap } from "./shop.types";

import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";

export type FetchCollectionsStart =
  Action<SHOP_ACTION_TYPES.FETCH_COLLECTIONS_START>;

export type FetchCollectionsSuccess = ActionWithPayload<
  SHOP_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS,
  CollectionsMap
>;

export type FetchCollectionsFailure = ActionWithPayload<
  SHOP_ACTION_TYPES.FETCH_COLLECTIONS_FAILURE,
  string
>;

export const fetchCollectionsStart = withMatcher(
  (): FetchCollectionsStart =>
    createAction(SHOP_ACTION_TYPES.FETCH_COLLECTIONS_START)
);

export const fetchCollectionsSuccess = withMatcher(
  (collectionsMap: CollectionsMap): FetchCollectionsSuccess =>
    createAction(SHOP_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS, collectionsMap)
);

export const fetchCollectionsFailure = withMatcher(
  (errorMessage: string): FetchCollectionsFailure =>
    createAction(SHOP_ACTION_TYPES.FETCH_COLLECTIONS_FAILURE, errorMessage)
);
