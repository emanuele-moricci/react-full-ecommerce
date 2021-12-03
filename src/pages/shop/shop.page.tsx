import CollectionsOverview from "src/components/collection/collections-overview/collections-overview.component";

import * as Styled from "./shop.styles";

const Shop = (): JSX.Element => {
  return (
    <Styled.ShopPage>
      <CollectionsOverview />
    </Styled.ShopPage>
  );
};

export default Shop;
