import { ButtonHTMLAttributes } from "react";
import "./custom-button.styles.scss";

interface ICustomButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const CustomButton = ({ children, ...props }: ICustomButton): JSX.Element => (
  <button className="custom-button" {...props}>
    {children}
  </button>
);

export default CustomButton;
