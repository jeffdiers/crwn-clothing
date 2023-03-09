import { AnyAction } from "redux";

import { UserData } from "../../utils/firebase/firebase.utils";
import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
} from "./user.actions";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly error: Error | null;
};

const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  error: null,
};

const userReducer = (
  state = USER_INITIAL_STATE,
  action = {} as AnyAction
): UserState => {
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
