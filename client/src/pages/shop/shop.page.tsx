import { useSelector } from "react-redux";

import { selectIsFetching } from "./state/shop.selectors";

import ShopOverviewComponent from "src/pages/shop/components/shop-overview.component";
import Spinner from "src/components/_common/layout/spinner/spinner.component";

import * as Styled from "./shop.styles";

const Shop = (): JSX.Element => {
  const loading = useSelector(selectIsFetching);

  return loading ? (
    <Spinner />
  ) : (
    <Styled.ShopPage>
      <ShopOverviewComponent />
    </Styled.ShopPage>
  );
};

export default Shop;
