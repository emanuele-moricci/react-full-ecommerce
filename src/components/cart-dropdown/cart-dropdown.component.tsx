import { NavigateFunction, useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import { CartItem as CartItemType } from "../../redux/cart/cart.types";
import { selectItems } from "../../redux/cart/cart.selectors";
import { Dispatch } from "redux";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

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
