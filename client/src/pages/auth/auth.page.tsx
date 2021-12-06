import SignIn from "src/pages/auth/components/sign-in/sign-in.component";
import SignUp from "src/pages/auth/components/sign-up/sign-up.component";

import * as Styled from "./auth.styles";

const Auth = (): JSX.Element => (
  <Styled.AuthPage>
    <SignIn />
    <SignUp />
  </Styled.AuthPage>
);

export default Auth;
