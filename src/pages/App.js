import { useState, useEffect } from "react";

import { auth, createUserProfileDocument } from "../db/firebase.utils";

import Header from "../components/header/header.component";
import Routes from "./routes";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let unsubFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userSnap = await createUserProfileDocument(userAuth);

        setUser({
          id: userSnap?.id,
          ...userSnap?.data(),
        });
      } else {
        setUser(userAuth);
      }
    });

    return () => {
      unsubFromAuth();
    };
  }, []);

  return (
    <div>
      <Header user={user} />
      <Routes />
    </div>
  );
};

export default App;
