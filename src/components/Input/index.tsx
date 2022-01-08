import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
}

export const Input = ({ placeholder, label, ...rest }: InputProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input placeholder={placeholder} onChange={rest.onChange} />
    </div>
  );
};
