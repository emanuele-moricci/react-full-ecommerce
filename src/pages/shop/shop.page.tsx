import { useState, useEffect } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionsOverview from "src/components/collection/collections-overview/collections-overview.component";
import { Collection } from "src/redux/shop/shop.types";
import { selectCollections } from "src/redux/shop/shop.selectors";

import WithSpinner from "src/components/HOC/with-spinner/with-spinner.component";

import * as Styled from "./shop.styles";

interface IShopProps {
  collections: Collection[];
}

const Shop = ({ collections }: IShopProps): JSX.Element => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(collections.length === 0);
  }, [collections]);

  return WithSpinner(
    <Styled.ShopPage>
      <CollectionsOverview collections={collections} />
    </Styled.ShopPage>
  )(loading);
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(Shop);
