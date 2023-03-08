import React from "react";

import CollectionPreview from "../collection-preview/collection-preview.component";

import { selectCollectionsMap } from "../../redux/shop/shop.selectors";

import { CollectionsOverviewContainer } from "./collections-overview.styles";
import { useSelector } from "react-redux";

const CollectionsOverview = () => {
  const collectionsMap = useSelector(selectCollectionsMap);

  return (
    <CollectionsOverviewContainer>
      {Object.keys(collectionsMap).map((key) => {
        const products = collectionsMap[key];
        return (
          <CollectionPreview
            key={key}
            title={key}
            items={products}
            routeName={key.toLowerCase()}
          />
        );
      })}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
