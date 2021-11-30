import { Dispatch } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartDropdown } from "../../../redux/cart/cart.actions";
import { selectItemsCount } from "../../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../../assets/img/shopping-bag.svg";
import "./cart-icon.styles.scss";

interface ICartIconProps {
  toggleCartDropdown: () => void;
  itemCount: number;
}

const CartIcon = ({ toggleCartDropdown, itemCount }: ICartIconProps) => (
  <div className="cart-icon" onClick={toggleCartDropdown}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"> {itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectItemsCount,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
