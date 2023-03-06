export enum SHOP_ACTION_TYPES {
  FETCH_COLLECTIONS_START = "shop/FETCH_COLLECTIONS_START",
  FETCH_COLLECTIONS_SUCCESS = "shop/FETCH_COLLECTIONS_SUCCESS",
  FETCH_COLLECTIONS_FAILURE = "shop/FETCH_COLLECTIONS_FAILURE",
}

export type CollectionItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type Collections = {
  id: string;
  items: CollectionItem[];
  routeName: string;
  title: string;
};

export type CollectionsMap = {
  [key: string]: CollectionItem[];
};
