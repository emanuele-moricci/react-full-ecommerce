import { Dispatch } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectItemsCount } from "src/redux/cart/cart.selectors";
import { toggleCartDropdown } from "src/redux/cart/cart.actions";

import * as Styled from "./cart-icon.styles";

interface ICartIconProps {
  toggleCartDropdown: () => void;
  itemCount: number;
}

const CartIcon = ({ toggleCartDropdown, itemCount }: ICartIconProps) => (
  <Styled.CartIcons onClick={toggleCartDropdown}>
    <Styled.ShoppingIcon />
    <Styled.ItemCount> {itemCount}</Styled.ItemCount>
  </Styled.CartIcons>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectItemsCount,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
