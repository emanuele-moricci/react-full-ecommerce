import { NavigateFunction, useNavigate } from "react-router-dom";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CartItem as CartItemType } from "src/redux/cart/cart.types";
import { selectItems } from "src/redux/cart/cart.selectors";
import { toggleCartDropdown } from "src/redux/cart/cart.actions";

import CartItem from "src/components/cart/cart-item/cart-item.component";
import CustomButton from "src/components/form/custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

interface ICartDropdownProps {
  items: CartItemType[];
  dispatch: Dispatch;
}

const CartDropdown = ({ items, dispatch }: ICartDropdownProps) => {
  const navigate: NavigateFunction = useNavigate(),
    navigateFn = (): void => navigate(`checkout`);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigateFn();
          dispatch(toggleCartDropdown());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectItems,
});

export default connect(mapStateToProps)(CartDropdown);
