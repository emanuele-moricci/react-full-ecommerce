import { useEffect } from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { User } from "../redux/user/user.types";
import { setUser } from "../redux/user/user.action";

import { auth, createUserProfileDocument } from "../db/firebase.utils";

import Header from "../components/header/header.component";
import Routes from "./routes";

interface IApp {
  setUser: (user: User | null) => void;
}

const App = ({ setUser }: IApp) => {
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
