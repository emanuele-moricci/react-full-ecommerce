import { ChangeEvent, InputHTMLAttributes } from "react";

import * as Styled from "./form-input.styles";

interface IFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const FormInput = ({
  handleChange,
  label,
  ...props
}: IFormInputProps): JSX.Element => (
  <Styled.GroupContainer>
    <Styled.FormInput onChange={handleChange} {...props} />
    {label ? (
      <Styled.FormInputLabel shrink={props.value === "shrink"}>
        {label}
      </Styled.FormInputLabel>
    ) : null}
  </Styled.GroupContainer>
);

export default FormInput;
