import { ChangeEvent, FormEvent, useState } from "react";

import { useDispatch } from "react-redux";
import { signUpStart } from "src/redux/user/user.actions";

import FormInput from "src/components/form/form-input/form-input.component";
import CustomButton from "src/components/form/custom-button/custom-button.component";

import * as Styled from "./sign-up.styles";

const SignUp = (): JSX.Element => {
  const dispatch = useDispatch();

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

      dispatch(signUpStart({ name, email, password }));
    };

  return (
    <Styled.SignUp>
      <Styled.Title>I do not have an account</Styled.Title>
      <span>Sign up with your email and password</span>
      <Styled.SignUpForm onSubmit={submitFn}>
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
      </Styled.SignUpForm>
    </Styled.SignUp>
  );
};

export default SignUp;
