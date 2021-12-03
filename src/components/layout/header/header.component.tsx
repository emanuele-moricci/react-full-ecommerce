import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { User } from "src/redux/user/user.types";
import { selectCartHidden } from "src/redux/cart/cart.selectors";
import { selectCurrentUser } from "src/redux/user/user.selectors";

import { auth } from "src/db/firebase.utils";

import CartIcon from "src/components/cart/cart-icon/cart-icon.component";
import CartDropdown from "src/components/cart/cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "src/assets/img/crown.svg";
import * as Styled from "./header.styles";

interface IHeaderProps {
  user?: User;
  hidden: boolean;
}

const Header = ({ user, hidden }: IHeaderProps): JSX.Element => {
  return (
    <Styled.HeaderContainer>
      <Styled.LogoContainer to="/">
        <Logo className="logo" />
      </Styled.LogoContainer>
      <Styled.OptionsContainer>
        <Styled.OptionLink to="/shop">SHOP</Styled.OptionLink>
        <Styled.OptionLink to="/shop">CONTACT</Styled.OptionLink>
        {user ? (
          <Styled.OptionLink as="div" onClick={() => auth.signOut()}>
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

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
