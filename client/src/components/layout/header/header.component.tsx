import { useDispatch, useSelector } from "react-redux";
import { userActions } from "src/redux/user/user.slice";
import { selectCartHidden } from "src/redux/cart/cart.selectors";
import { selectCurrentUser } from "src/redux/user/user.selectors";

import CartIcon from "src/components/cart/cart-icon/cart-icon.component";
import CartDropdown from "src/components/cart/cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "src/assets/img/crown.svg";
import * as Styled from "./header.styles";

const Header = (): JSX.Element => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

  return (
    <Styled.HeaderContainer>
      <Styled.LogoContainer to="/">
        <Logo className="logo" />
      </Styled.LogoContainer>
      <Styled.OptionsContainer>
        <Styled.OptionLink to="/shop">SHOP</Styled.OptionLink>
        <Styled.OptionLink to="/shop">CONTACT</Styled.OptionLink>
        {user ? (
          <Styled.OptionLink
            as="div"
            onClick={() => dispatch(userActions.SignOutStart())}
          >
            SIGN OUT
          </Styled.OptionLink>
        ) : (
          <Styled.OptionLink to="/auth">SIGN IN</Styled.OptionLink>
        )}
        <CartIcon />
      </Styled.OptionsContainer>
      {!hidden && <CartDropdown />}
    </Styled.HeaderContainer>
  );
};

export default Header;
