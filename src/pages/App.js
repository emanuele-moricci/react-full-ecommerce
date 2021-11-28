import { useState, useEffect } from "react";

import { auth } from "../db/firebase.utils";

import Header from "../components/header/header.component";
import Routes from "./routes";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let unsubFromAuth = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
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
