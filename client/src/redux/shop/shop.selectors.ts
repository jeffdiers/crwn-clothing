import { createSelector } from "reselect";

import { Collections, CollectionsMap } from "./shop.types";

const selectShop = (state: any) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollectionsMap = createSelector(
  [selectCollections],
  (collections): CollectionsMap =>
    collections.reduce((acc: CollectionsMap, collection: Collections) => {
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
