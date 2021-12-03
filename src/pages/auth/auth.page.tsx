import SignIn from "src/components/auth/sign-in/sign-in.component";
import SignUp from "src/components/auth/sign-up/sign-up.component";

import * as Styled from "./auth.styles";

const Auth = (): JSX.Element => (
  <Styled.AuthPage>
    <SignIn />
    <SignUp />
  </Styled.AuthPage>
);

export default Auth;
