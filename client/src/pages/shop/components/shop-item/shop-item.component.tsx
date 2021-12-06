import { useNavigate } from "react-router";

import { Collection } from "src/pages/shop/state/shop.types";

import CollectionItem from "src/pages/collection/components/collection-item/collection-item.component";

import * as Styled from "./shop-item.styles";

interface IShopItemProps extends Collection {}

const ShopItem = ({ title, items }: IShopItemProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Styled.ShopItem>
      <Styled.Title onClick={() => navigate(`${title.toLowerCase()}`)}>
        {title.toUpperCase()}
      </Styled.Title>
      <Styled.Item>
        {items
          .filter((_, i) => i < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Styled.Item>
    </Styled.ShopItem>
  );
};

export default ShopItem;
