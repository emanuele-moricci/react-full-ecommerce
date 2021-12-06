import { ChangeEvent, FormEvent, useState } from "react";

import { useDispatch } from "react-redux";
import { userActions } from "src/redux/user/user.slice";

import FormInput from "src/components/_common/form/form-input/form-input.component";
import CustomButton from "src/components/_common/form/custom-button/custom-button.component";

import * as Styled from "./sign-in.styles";

const SignIn = (): JSX.Element => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>(""),
    [password, setPassword] = useState<string>(""),
    changeFn = (e: ChangeEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const { value, name } = e.target;
      switch (name) {
        case "email":
          setEmail(value);
          break;
        case "password":
          setPassword(value);
          break;
        default:
          throw new Error("No config found for this input name");
      }
    },
    submitFn = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();

      dispatch(userActions.EmailSignInStart({ email, password }));
    };

  return (
    <Styled.SignIn>
      <Styled.Title>I already have an account</Styled.Title>
      <span>Sign in with your email and password</span>

      <Styled.SignInForm onSubmit={submitFn}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={changeFn}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={changeFn}
          label="Password"
          required
        />

        <Styled.Buttons>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            googleSignIn
            onClick={() => dispatch(userActions.googleSignInStart())}
          >
            Sign In with Google
          </CustomButton>
        </Styled.Buttons>
      </Styled.SignInForm>
    </Styled.SignIn>
  );
};

export default SignIn;
