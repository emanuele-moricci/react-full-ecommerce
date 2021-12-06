import { FC } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsFetching } from "src/redux/shop/shop.selectors";

import ShopOverview from "./shop-overview.component";

import withSpinner from "src/components/HOC/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
});

const ShopOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(ShopOverview);

export default ShopOverviewContainer as FC;
