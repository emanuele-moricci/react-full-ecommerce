import { useSelector } from "react-redux";
import { selectCollections } from "src/redux/shop/shop.selectors";

import ShopItem from "src/components/shop/shop-item/shop-item.component";

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
