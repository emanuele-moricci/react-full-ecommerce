import { ButtonHTMLAttributes } from "react";
import "./custom-button.styles.scss";

interface ICustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  googleSignIn?: boolean;
  inverted?: boolean;
}

const CustomButton = ({
  children,
  googleSignIn,
  inverted,
  ...props
}: ICustomButtonProps): JSX.Element => (
  <button
    className={`custom-button ${googleSignIn ? "google-sign-in" : ""} ${
      inverted ? "inverted" : ""
    }`}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;
