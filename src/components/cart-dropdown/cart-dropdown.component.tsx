import { connect } from "react-redux";
import { CartItem as CartItemType } from "../../redux/cart/cart.types";
import { RootState } from "../../redux/root.store";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

interface ICartDropdownProps {
  items: CartItemType[];
}

const CartDropdown = ({ items }: ICartDropdownProps) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { items } }: RootState) => ({
  items,
});

export default connect(mapStateToProps)(CartDropdown);
