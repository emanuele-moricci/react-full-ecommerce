import ShopOverviewContainer from "src/components/shop/shop-overview.container";

import * as Styled from "./shop.styles";

const Shop = (): JSX.Element => {
  return (
    <Styled.ShopPage>
      <ShopOverviewContainer />
    </Styled.ShopPage>
  );
};

export default Shop;
