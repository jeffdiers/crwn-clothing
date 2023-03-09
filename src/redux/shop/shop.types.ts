export enum SHOP_ACTION_TYPES {
  FETCH_COLLECTIONS_START = "shop/FETCH_COLLECTIONS_START",
  FETCH_COLLECTIONS_SUCCESS = "shop/FETCH_COLLECTIONS_SUCCESS",
  FETCH_COLLECTIONS_FAILURE = "shop/FETCH_COLLECTIONS_FAILURE",
}

export type CollectionItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Collection = {
  items: CollectionItem[];
  title: string;
};

export type CollectionsMap = {
  [key: string]: CollectionItem[];
};
