import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

import { RootState } from "../../redux/store";
import { FC } from "react";

type MapState = {
  isLoading: boolean;
};

const maspStateToProps = createStructuredSelector<RootState, MapState>({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose<FC>(
  connect(maspStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
