import { AnyAction } from "redux";

import { Collections } from "./shop.types";
import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

export type ShopType = {
  readonly collections: Collections[];
  readonly isFetching: boolean;
  readonly errorMessage: string;
};

const INITIAL_STATE: ShopType = {
  collections: [],
  isFetching: false,
  errorMessage: "",
};

const shopReducer = (state = INITIAL_STATE, action = {} as AnyAction) => {
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
