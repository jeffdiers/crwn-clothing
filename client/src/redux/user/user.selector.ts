import { createSelector } from "reselect";

import { UserType } from "./user.reducer";

const selectUser = (state: any): UserType => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
