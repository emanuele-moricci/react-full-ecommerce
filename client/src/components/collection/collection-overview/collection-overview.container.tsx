import { FC } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsFetching } from "src/redux/shop/shop.selectors";

import CollectionsOverview, {
  ICollectionOverviewProps,
} from "./collection-overview.component";

import withSpinner from "src/components/HOC/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer as FC<ICollectionOverviewProps>;
