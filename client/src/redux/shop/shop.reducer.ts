import { AnyAction } from "redux";

import { Collection } from "./shop.types";
import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

export type ShopState = {
  readonly collections: Collection[];
  readonly isFetching: boolean;
  readonly errorMessage: string;
};

const SHOP_INITIAL_STATE: ShopState = {
  collections: [],
  isFetching: false,
  errorMessage: "",
};

const shopReducer = (
  state = SHOP_INITIAL_STATE,
  action = {} as AnyAction
): ShopState => {
  if (fetchCollectionsStart.match(action)) {
    return {
      ...state,
      isFetching: true,
    };
  }

  if (fetchCollectionsSuccess.match(action)) {
    return {
      ...state,
      isFetching: false,
      collections: action.payload,
    };
  }

  if (fetchCollectionsFailure.match(action)) {
    return {
      ...state,
      isFetching: false,
      errorMessage: action.payload,
    };
  }

  return state;
};

export default shopReducer;
