import { useEffect } from "react";

import { auth, createUserProfileDocument } from "src/db/firebase.utils";

import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import { User } from "src/redux/user/user.types";
import { setUser } from "src/redux/user/user.actions";
import { fetchCollectionsStartAsync } from "src/redux/shop/shop.actions";

import Header from "src/components/layout/header/header.component";
import Routes from "src/pages/routes";

interface IAppProps {
  setUser: (user: User | null) => void;
  fetchCollectionsStartAsync: () => void;
}

const App = ({
  setUser,
  fetchCollectionsStartAsync,
}: IAppProps): JSX.Element => {
  useEffect(() => {
    let unsubFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userSnap = await createUserProfileDocument(userAuth);
        const user = userSnap?.data();

        if (!user) {
          setUser(null);
        } else {
          setUser({
            id: userSnap ? userSnap.id : "",
            displayName: user?.displayName,
            createdAt: user?.createdAt,
            email: user?.email,
          });
        }
      } else {
        setUser(null);
      }
    });

    fetchCollectionsStartAsync();

    return () => {
      unsubFromAuth();
    };
  }, [setUser, fetchCollectionsStartAsync]);

  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, void, Action>) => ({
  setUser: (user: User | null) => dispatch(setUser(user)),
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(App);
