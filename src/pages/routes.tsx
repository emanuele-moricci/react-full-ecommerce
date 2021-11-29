import { Routes, Route, Navigate } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { User } from "../redux/user/user.types";
import { selectCurrentUser } from "../redux/user/user.selectors";

import Home from "./home/home.component";
import Shop from "./shop/shop.component";
import Collection from "./collection/collection.component";
import Auth from "./auth/auth.component";
import Checkout from "./checkout/checkout.component";

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
