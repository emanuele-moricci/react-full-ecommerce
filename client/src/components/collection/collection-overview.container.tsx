import { FC } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsFetching } from "src/redux/shop/shop.selectors";

import CollectionOverview, {
  ICollectionOverviewProps,
} from "./collection-overview.component";

import withSpinner from "src/components/HOC/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);

export default CollectionOverviewContainer as FC<ICollectionOverviewProps>;
