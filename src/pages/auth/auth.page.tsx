import SignIn from "src/components/auth/sign-in/sign-in.component";
import SignUp from "src/components/auth/sign-up/sign-up.component";

import "./auth.styles.scss";

const Auth = (): JSX.Element => (
  <div className="auth">
    <SignIn />
    <SignUp />
  </div>
);

export default Auth;
