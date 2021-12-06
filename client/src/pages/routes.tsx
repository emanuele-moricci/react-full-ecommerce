import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "src/redux/user/user.selectors";

import Spinner from "src/components/_common/layout/spinner/spinner.component";
import ErrorWrapper from "src/components/_common/layout/error-boundary/error-boundary.component";

import Error from "src/pages/error/error.page";

// ROUTES
const Home = lazy(() => import("src/pages/home/home.page"));
const Shop = lazy(() => import("src/pages/shop/shop.page"));
const Collection = lazy(() => import("src/pages/collection/collection.page"));
const Auth = lazy(() => import("src/pages/auth/auth.page"));
const Checkout = lazy(() => import("src/pages/checkout/checkout.page"));

const ProjectRoutes = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <ErrorWrapper>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:collection" element={<Collection />} />
          <Route path="/auth" element={user ? <Navigate to="/" /> : <Auth />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error statusCode={404} />} />
        </Routes>
      </Suspense>
    </ErrorWrapper>
  );
};

export default ProjectRoutes;
