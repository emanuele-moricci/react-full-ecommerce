import { Routes, Route } from "react-router-dom";

import Home from "./home/home.component";
import Shop from "./shop/shop.component";

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
};

export default ProjectRoutes;
