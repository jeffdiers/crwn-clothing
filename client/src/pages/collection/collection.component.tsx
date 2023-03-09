import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Spinner from "../../components/with-spinner/spinner.component";
import CollectionItem from "../../components/collection-item/collection-item.component";

import {
  selectCollectionsMap,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";

import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer,
} from "./collection.styles";

type CollectionRouteParams = {
  collectionId: string;
};

const CollectionPage = () => {
  const { collectionId } = useParams<
    keyof CollectionRouteParams
  >() as unknown as CollectionRouteParams;
  const isLoading = !useSelector(selectIsCollectionsLoaded);
  const collectionsMap = useSelector(selectCollectionsMap);
  const products = collectionsMap[collectionId] || [];

  return (
    <CollectionPageContainer>
      <TitleContainer>{collectionId.toUpperCase()}</TitleContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <ItemsContainer>
          {products.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </ItemsContainer>
      )}
    </CollectionPageContainer>
  );
};

export default CollectionPage;
