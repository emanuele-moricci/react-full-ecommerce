import { useDispatch } from "react-redux";
import { CartItem } from "src/redux/cart/cart.types";
import { cartActions } from "src/redux/cart/cart.slice";

import * as Styled from "./checkout-item.styles";

interface ICheckoutItemProps {
  item: CartItem;
}

const CheckoutItem = ({ item }: ICheckoutItemProps) => {
  const dispatch = useDispatch();

  return (
    <Styled.CheckoutItem>
      <Styled.ImageContainer>
        <img alt="item" src={item.imageUrl} />
      </Styled.ImageContainer>
      <Styled.Name>{item.name}</Styled.Name>
      <Styled.Quantity>
        <Styled.Arrow onClick={() => dispatch(cartActions.removeItem(item))}>
          &#10094;
        </Styled.Arrow>
        <Styled.Value>{item.quantity}</Styled.Value>
        <Styled.Arrow onClick={() => dispatch(cartActions.addItem(item))}>
          &#10095;
        </Styled.Arrow>
      </Styled.Quantity>
      <Styled.Price>{item.price}</Styled.Price>
      <Styled.RemoveButton
        onClick={() => dispatch(cartActions.deleteItemFromCart(item))}
      >
        &#10005;
      </Styled.RemoveButton>
    </Styled.CheckoutItem>
  );
};

export default CheckoutItem;
