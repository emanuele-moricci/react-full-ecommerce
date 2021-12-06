import { useDispatch, useSelector } from "react-redux";
import { selectItemsCount } from "src/redux/cart/cart.selectors";
import { cartActions } from "src/redux/cart/cart.slice";

import * as Styled from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectItemsCount);

  return (
    <Styled.CartIcons
      onClick={() => dispatch(cartActions.toggleCartDropdown())}
    >
      <Styled.ShoppingIcon />
      <Styled.ItemCount> {itemCount}</Styled.ItemCount>
    </Styled.CartIcons>
  );
};

export default CartIcon;
