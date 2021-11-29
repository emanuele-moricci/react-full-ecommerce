import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { RootState } from "../../redux/root.store";
import { User } from "../../redux/user/user.types";

import { auth } from "../../db/firebase.utils";

import { ReactComponent as Logo } from "../../assets/img/crown.svg";
import "./header.styles.scss";

interface IHeaderProps {
  user?: User;
}

const Header = ({ user }: IHeaderProps): JSX.Element => {
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
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }: RootState) => ({
  user: user.user,
});

export default connect(mapStateToProps)(Header);
