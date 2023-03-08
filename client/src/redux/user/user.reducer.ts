import { AnyAction } from "redux";

import { UserData } from "../../utils/firebase/firebase.utils";
import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
} from "./user.actions";

export type UserType = {
  readonly currentUser: UserData | null;
  readonly error: Error | null;
};

const INITIAL_STATE: UserType = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action = {} as AnyAction) => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  if (
    signUpFailed.match(action) ||
    signOutFailed.match(action) ||
    signInFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }

  return state;
};

export default userReducer;
