import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { checkUserSession } from "src/redux/user/user.actions";
import { fetchCollectionsStart } from "src/redux/shop/shop.actions";

import Header from "src/components/layout/header/header.component";
import Routes from "src/pages/routes";

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());

    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
};

export default App;
