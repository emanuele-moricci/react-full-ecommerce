import { Collection } from "src/redux/shop/shop.types";

import CollectionItem from "src/components/collection/collection-item/collection-item.component";

import * as Styled from "./shop-item.styles";

interface IShopItemProps extends Collection {}

const ShopItem = ({ title, items }: IShopItemProps): JSX.Element => (
  <Styled.ShopItem>
    <Styled.Title>{title.toUpperCase()}</Styled.Title>
    <Styled.Item>
      {items
        .filter((_, i) => i < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </Styled.Item>
  </Styled.ShopItem>
);

export default ShopItem;
