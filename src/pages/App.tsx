import { useEffect } from "react";

import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import { User } from "src/redux/user/user.types";
import { setUser } from "src/redux/user/user.actions";
import { fetchCollectionsStart } from "src/redux/shop/shop.actions";

import Header from "src/components/layout/header/header.component";
import Routes from "src/pages/routes";

interface IAppProps {
  setUser: (user: User | null) => void;
  fetchCollectionsStart: () => void;
}

const App = ({ fetchCollectionsStart }: IAppProps): JSX.Element => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, void, Action>) => ({
  setUser: (user: User | null) => dispatch(setUser(user)),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(App);
