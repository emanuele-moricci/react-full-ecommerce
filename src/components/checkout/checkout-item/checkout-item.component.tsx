import { Dispatch } from "redux";
import { connect } from "react-redux";
import { CartItem } from "src/redux/cart/cart.types";
import {
  addItem,
  removeItem,
  deleteItemFromCart,
} from "src/redux/cart/cart.actions";

import * as Styled from "./checkout-item.styles";

interface ICheckoutItemProps {
  item: CartItem;
  addItem: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
  deleteItemFromCart: (item: CartItem) => void;
}

const CheckoutItem = ({
  item,
  addItem,
  removeItem,
  deleteItemFromCart,
}: ICheckoutItemProps) => {
  return (
    <Styled.CheckoutItem>
      <Styled.ImageContainer>
        <img alt="item" src={item.imageUrl} />
      </Styled.ImageContainer>
      <Styled.Name>{item.name}</Styled.Name>
      <Styled.Quantity>
        <Styled.Arrow onClick={() => removeItem(item)}>&#10094;</Styled.Arrow>
        <Styled.Value>{item.quantity}</Styled.Value>
        <Styled.Arrow onClick={() => addItem(item)}>&#10095;</Styled.Arrow>
      </Styled.Quantity>
      <Styled.Price>{item.price}</Styled.Price>
      <Styled.RemoveButton onClick={() => deleteItemFromCart(item)}>
        &#10005;
      </Styled.RemoveButton>
    </Styled.CheckoutItem>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItem: (item: CartItem) => dispatch(addItem(item)),
  removeItem: (item: CartItem) => dispatch(removeItem(item)),
  deleteItemFromCart: (item: CartItem) => dispatch(deleteItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
