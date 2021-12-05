import { ButtonHTMLAttributes } from "react";

import * as Styled from "./custom-button.styles";

export interface ICustomButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  googleSignIn?: boolean;
  inverted?: boolean;
}

const CustomButton = ({
  children,
  ...props
}: ICustomButtonProps): JSX.Element => (
  <Styled.CustomButton {...props}>{children}</Styled.CustomButton>
);

export default CustomButton;
