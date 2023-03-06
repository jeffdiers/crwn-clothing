import { createSelector } from "reselect";

import { CartState } from "./cart.reducer";

const selectCart = (state: any): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuanyity, cartItem) =>
        accumalatedQuanyity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuanyity, cartItem) =>
      accumalatedQuanyity + cartItem.quantity * cartItem.price,
    0
  )
);
