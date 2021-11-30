import { Routes, Route, Navigate } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { User } from "src/redux/user/user.types";
import { selectCurrentUser } from "src/redux/user/user.selectors";

import Home from "src/pages/home/home.page";
import Shop from "src/pages/shop/shop.page";
import Collection from "src/pages/collection/collection.page";
import Auth from "src/pages/auth/auth.page";
import Checkout from "src/pages/checkout/checkout.page";

interface IRoutesProps {
  user?: User;
}

const ProjectRoutes = ({ user }: IRoutesProps) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:collection" element={<Collection />} />
      <Route path="/auth" element={user ? <Navigate to="/" /> : <Auth />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps)(ProjectRoutes);
