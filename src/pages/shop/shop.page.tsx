import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionsOverview from "src/components/collection/collections-overview/collections-overview.component";
import { Collection } from "src/redux/shop/shop.types";
import {
  selectCollections,
  selectIsFetching,
} from "src/redux/shop/shop.selectors";

import WithSpinner from "src/components/HOC/with-spinner/with-spinner.component";

import * as Styled from "./shop.styles";

interface IShopProps {
  collections: Collection[];
  loading: boolean;
}

const Shop = ({ collections, loading }: IShopProps): JSX.Element => {
  return WithSpinner(
    <Styled.ShopPage>
      <CollectionsOverview collections={collections} />
    </Styled.ShopPage>
  )(loading);
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
  loading: selectIsFetching,
});

export default connect(mapStateToProps)(Shop);
