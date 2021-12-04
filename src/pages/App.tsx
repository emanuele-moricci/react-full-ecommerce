import { useEffect } from "react";

import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import { checkUserSession } from "src/redux/user/user.actions";
import { fetchCollectionsStart } from "src/redux/shop/shop.actions";

import Header from "src/components/layout/header/header.component";
import Routes from "src/pages/routes";

interface IAppProps {
  fetchCollectionsStart: () => void;
  checkUserSession: () => void;
}

const App = ({
  fetchCollectionsStart,
  checkUserSession,
}: IAppProps): JSX.Element => {
  useEffect(() => {
    checkUserSession();

    fetchCollectionsStart();
  }, [checkUserSession, fetchCollectionsStart]);

  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, void, Action>) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(null, mapDispatchToProps)(App);
