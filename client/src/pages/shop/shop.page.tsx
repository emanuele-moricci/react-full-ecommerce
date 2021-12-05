import CollectionsOverviewContainer from "src/components/collection/collections-overview/collections-overview.container";

import * as Styled from "./shop.styles";

const Shop = (): JSX.Element => {
  return (
    <Styled.ShopPage>
      <CollectionsOverviewContainer />
    </Styled.ShopPage>
  );
};

export default Shop;
