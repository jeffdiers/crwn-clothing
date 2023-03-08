import { createSelector } from "reselect";

import { ShopState } from "./shop.reducer";
import { Collection, CollectionsMap } from "./shop.types";

const selectShop = (state: any): ShopState => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsMap = createSelector(
  [selectCollections],
  (collections): CollectionsMap =>
    collections.reduce((acc: CollectionsMap, collection: Collection) => {
      const { title, items } = collection;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CollectionsMap)
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
