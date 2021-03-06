import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { userActions } from "src/redux/user/user.slice";
import { shopActions } from "src/pages/shop/state/shop.slice";

import Header from "src/components/_common/layout/header/header.component";
import Routes from "src/pages/routes";

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.checkUserSession());

    dispatch(shopActions.fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
};

export default App;
