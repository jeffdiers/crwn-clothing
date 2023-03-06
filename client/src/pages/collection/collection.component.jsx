import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";

import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer,
} from "./collection.styles";

const CollectionPage = ({ collectionsMap }) => {
  const { collectionId } = useParams();
  const [products, setProducts] = useState(collectionsMap[collectionId]);

  useEffect(() => {
    setProducts(collectionsMap[collectionId]);
  }, [collectionId, collectionsMap]);

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
