import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { User } from "../../../redux/user/user.types";
import { selectCartHidden } from "../../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../../redux/user/user.selectors";

import { auth } from "../../../db/firebase.utils";

import CartIcon from "../../cart/cart-icon/cart-icon.component";
import CartDropdown from "../../cart/cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../../assets/img/crown.svg";
import "./header.styles.scss";

interface IHeaderProps {
  user?: User;
  hidden: boolean;
}

const Header = ({ user, hidden }: IHeaderProps): JSX.Element => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {user ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/auth">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
