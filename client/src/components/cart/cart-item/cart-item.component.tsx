import { memo } from "react";
import { CartItem as CartItemType } from "src/redux/cart/cart.types";

import * as Styled from "./cart-item.styles";

interface ICartItemProps {
  item: CartItemType;
}

const CartItem = ({
  item: { imageUrl, price, name, quantity },
}: ICartItemProps) => (
  <Styled.CartItem>
    <img src={imageUrl} alt="item" />
    <Styled.ItemDetails>
      <Styled.Name>{name}</Styled.Name>
      <Styled.Price>
        {quantity} x ${price}
      </Styled.Price>
    </Styled.ItemDetails>
  </Styled.CartItem>
);

export default memo(CartItem);
