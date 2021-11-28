import { ChangeEvent, FormEvent, useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../db/firebase.utils";

import "./sign-up.styles.scss";

const SignUp = (): JSX.Element => {
  const [name, setName] = useState<string>(""),
    [email, setEmail] = useState<string>(""),
    [password, setPassword] = useState<string>(""),
    [confPwd, setConfPwd] = useState<string>("");

  const changeFn = (e: ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = e.target;
      switch (name) {
        case "name":
          setName(value);
          break;
        case "email":
          setEmail(value);
          break;
        case "password":
          setPassword(value);
          break;
        case "confPwd":
          setConfPwd(value);
          break;
        default:
          throw new Error(`No config found for this input name: '${name}'`);
      }
    },
    submitFn = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();

      if (password !== confPwd) {
        alert("passwords don't match");
        return;
      }

      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await createUserProfileDocument(user, name);

        setName("");
        setEmail("");
        setPassword("");
        setConfPwd("");
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={submitFn}>
        <FormInput
          type="text"
          name="name"
          label="Name"
          value={name}
          handleChange={changeFn}
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          handleChange={changeFn}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={changeFn}
        />
        <FormInput
          type="password"
          name="confPwd"
          label="Confirm Password"
          value={confPwd}
          handleChange={changeFn}
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
