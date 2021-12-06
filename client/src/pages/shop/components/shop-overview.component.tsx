import { useSelector } from "react-redux";
import { selectCollections } from "src/pages/shop/state/shop.selectors";

import ShopItem from "src/pages/shop/components/shop-item/shop-item.component";

import * as Styled from "./shop-overview.styles";

const ShopOverview = (): JSX.Element => {
  const collections = useSelector(selectCollections);

  return (
    <Styled.ShopOverview>
      {collections.map((collection) => (
        <ShopItem key={collection.id} {...collection} />
      ))}
    </Styled.ShopOverview>
  );
};

export default ShopOverview;
