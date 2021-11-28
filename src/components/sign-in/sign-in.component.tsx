import { ChangeEvent, FormEvent, useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

const SignIn = (): JSX.Element => {
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
    submitFn = (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      setEmail("");
      setPassword("");
    };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={submitFn}>
        <FormInput
          name="email"
          value={email}
          handleChange={changeFn}
          label="Email"
          required
        />
        <FormInput
          name="password"
          value={password}
          handleChange={changeFn}
          label="Password"
          required
        />

        <CustomButton type="submit" value="Submit Form">
          SIGN IN
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
