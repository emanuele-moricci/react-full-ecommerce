import { NavigateFunction, useNavigate } from "react-router-dom";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CartItem as CartItemType } from "src/redux/cart/cart.types";
import { selectItems } from "src/redux/cart/cart.selectors";
import { toggleCartDropdown } from "src/redux/cart/cart.actions";

import CartItem from "src/components/cart/cart-item/cart-item.component";
import CustomButton from "src/components/form/custom-button/custom-button.component";

import * as Styled from "./cart-dropdown.styles";

interface ICartDropdownProps {
  items: CartItemType[];
  dispatch: Dispatch;
}

const CartDropdown = ({ items, dispatch }: ICartDropdownProps) => {
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
          dispatch(toggleCartDropdown());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </Styled.CartDropdown>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectItems,
});

export default connect(mapStateToProps)(CartDropdown);
