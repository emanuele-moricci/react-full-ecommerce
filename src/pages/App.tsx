import { useEffect } from "react";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { User } from "src/redux/user/user.types";
import { setUser } from "src/redux/user/user.actions";

import { auth, createUserProfileDocument } from "src/db/firebase.utils";

import Header from "src/components/layout/header/header.component";
import Routes from "src/pages/routes";

interface IAppProps {
  setUser: (user: User | null) => void;
}

const App = ({ setUser }: IAppProps): JSX.Element => {
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

    return () => {
      unsubFromAuth();
    };
  }, [setUser]);

  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setUser: (user: User | null) => dispatch(setUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
