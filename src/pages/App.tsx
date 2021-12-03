import { useEffect } from "react";

import { collection, onSnapshot } from "firebase/firestore";
import {
  auth,
  convertCollectionsSnapshotToMap,
  createUserProfileDocument,
  firestore,
} from "src/db/firebase.utils";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { User } from "src/redux/user/user.types";
import { setUser } from "src/redux/user/user.actions";
import { CollectionList } from "src/redux/shop/shop.types";
import { updateCollections } from "src/redux/shop/shop.actions";

import Header from "src/components/layout/header/header.component";
import Routes from "src/pages/routes";

interface IAppProps {
  setUser: (user: User | null) => void;
  updateCollections: (collectionsMap: CollectionList) => void;
}

const App = ({ setUser, updateCollections }: IAppProps): JSX.Element => {
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

    const collectionRef = collection(firestore, "collections");
    let unsubFromSnap = onSnapshot(collectionRef, async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

      updateCollections(collectionsMap);
    });

    return () => {
      unsubFromAuth();
      unsubFromSnap();
    };
  }, [setUser, updateCollections]);

  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setUser: (user: User | null) => dispatch(setUser(user)),
  updateCollections: (collectionsMap: CollectionList) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(App);
