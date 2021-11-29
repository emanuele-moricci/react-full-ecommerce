import { Dispatch } from "redux";
import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../assets/img/shopping-bag.svg";
import "./cart-icon.styles.scss";

interface ICartIconProps {
  toggleCartDropdown: () => void;
}

const CartIcon = ({ toggleCartDropdown }: ICartIconProps) => (
  <div className="cart-icon" onClick={toggleCartDropdown}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
