import { ChangeEvent, InputHTMLAttributes } from "react";

import "./form-input.styles.scss";

interface IFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const FormInput = ({
  handleChange,
  label,
  ...props
}: IFormInputProps): JSX.Element => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...props} />
    {label ? (
      <label className={`${props.value ? "shrink" : ""} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
