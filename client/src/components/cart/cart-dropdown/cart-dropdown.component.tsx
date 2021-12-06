import { NavigateFunction, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "src/redux/cart/cart.selectors";
import { cartActions } from "src/redux/cart/cart.slice";

import CartItem from "src/components/cart/cart-item/cart-item.component";
import CustomButton from "src/components/form/custom-button/custom-button.component";

import * as Styled from "./cart-dropdown.styles";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const navigate: NavigateFunction = useNavigate(),
    navigateFn = (): void => navigate(`checkout`);

  return (
    <Styled.CartDropdown>
      <Styled.CartItems>
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <Styled.EmptyMessage>Your cart is empty</Styled.EmptyMessage>
        )}
      </Styled.CartItems>
      <CustomButton
        onClick={() => {
          navigateFn();
          dispatch(cartActions.toggleCartDropdown());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </Styled.CartDropdown>
  );
};

export default CartDropdown;
