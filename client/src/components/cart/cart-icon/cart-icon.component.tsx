import { useDispatch, useSelector } from "react-redux";
import { selectItemsCount } from "src/redux/cart/cart.selectors";
import { toggleCartDropdown } from "src/redux/cart/cart.actions";

import * as Styled from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectItemsCount);

  return (
    <Styled.CartIcons onClick={() => dispatch(toggleCartDropdown())}>
      <Styled.ShoppingIcon />
      <Styled.ItemCount> {itemCount}</Styled.ItemCount>
    </Styled.CartIcons>
  );
};

export default CartIcon;
