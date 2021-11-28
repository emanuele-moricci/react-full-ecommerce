import { ButtonHTMLAttributes } from "react";
import "./custom-button.styles.scss";

interface ICustomButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  googleSignIn?: boolean;
}

const CustomButton = ({
  children,
  googleSignIn,
  ...props
}: ICustomButton): JSX.Element => (
  <button
    className={`custom-button ${googleSignIn ? "google-sign-in" : ""}`}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;
