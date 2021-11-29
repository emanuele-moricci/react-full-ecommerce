import { Routes, Route, Navigate } from "react-router-dom";

import { connect } from "react-redux";
import { RootState } from "../redux/root.store";
import { User } from "../redux/user/user.types";

import Home from "./home/home.component";
import Shop from "./shop/shop.component";
import Auth from "./auth/auth.component";

interface IRoutesProps {
  user?: User;
}

const ProjectRoutes = ({ user }: IRoutesProps) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/auth" element={user ? <Navigate to="/" /> : <Auth />} />
    </Routes>
  );
};

const mapStateToProps = ({ user }: RootState) => ({
  user: user.user,
});

export default connect(mapStateToProps)(ProjectRoutes);
