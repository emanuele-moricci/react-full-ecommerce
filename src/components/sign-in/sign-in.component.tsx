import { ChangeEvent, FormEvent, useState } from "react";

import { auth, signInWithGoogle } from "../../db/firebase.utils";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";
import { signInWithEmailAndPassword } from "@firebase/auth";

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
    submitFn = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();

      try {
        await signInWithEmailAndPassword(auth, email, password);
        setEmail("");
        setPassword("");
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={submitFn}>
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

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" googleSignIn onClick={signInWithGoogle}>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
