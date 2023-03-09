import { useEffect, FC } from "react";
import { Route } from "react-router-dom";

import { useDispatch } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionPage from "../collection/collection.component";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

import { RouteComponentProps } from "react-router-dom";

const ShopPage: FC<RouteComponentProps> = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
