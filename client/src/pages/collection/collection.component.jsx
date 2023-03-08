import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollectionsMap } from "../../redux/shop/shop.selectors";

import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer,
} from "./collection.styles";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collectionsMap = useSelector(selectCollectionsMap);
  const products = collectionsMap[collectionId] || [];

  return (
    <CollectionPageContainer>
      <TitleContainer>{collectionId.toUpperCase()}</TitleContainer>
      <ItemsContainer>
        {products.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
