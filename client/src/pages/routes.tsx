import { Routes, Route, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "src/redux/user/user.selectors";

import Home from "src/pages/home/home.page";
import Shop from "src/pages/shop/shop.page";
import Collection from "src/pages/collection/collection.page";
import Auth from "src/pages/auth/auth.page";
import Checkout from "src/pages/checkout/checkout.page";

const ProjectRoutes = () => {
  const user = useSelector(selectCurrentUser);

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

export default ProjectRoutes;
