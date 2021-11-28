import { ChangeEvent, InputHTMLAttributes } from "react";

import "./form-input.styles.scss";

interface IFormInput extends InputHTMLAttributes<HTMLInputElement> {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const FormInput = ({
  handleChange,
  label,
  ...props
}: IFormInput): JSX.Element => (
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
