import React from "react";

import CollectionPreview from "../collection-preview/collection-preview.component";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import { CollectionsOverviewContainer } from "./collections-overview.styles";
import { useSelector } from "react-redux";

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
