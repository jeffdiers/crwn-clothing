import { CollectionItem } from "../shop/shop.types";

export enum CART_ACTION_TYPES {
  TOGGLE_CART_HIDDEN = "cart/TOGGLE_CART_HIDDEN",
  ADD_ITEM = "cart/ADD_ITEM",
  REMOVE_ITEM = "cart/REMOVE_ITEM",
  CLEAR_ITEM_FROM_CART = "cart/CLEAR_ITEM_FROM_CART",
  CLEAR_CART = "cart/CLEAR_CART",
}

export type CartItem = CollectionItem & {
  quantity: number;
};
