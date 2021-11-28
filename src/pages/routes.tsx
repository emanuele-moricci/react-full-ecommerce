import { Routes, Route } from "react-router-dom";

import Home from "./home/home.component";
import Shop from "./shop/shop.component";
import Auth from "./auth/auth.component";

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default ProjectRoutes;
