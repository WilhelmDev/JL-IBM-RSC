"use client";
import { useState } from "react";

const PasswordInput = ({
  label = "Default label",
  name,
  placeholder = "",
  autoComplete = "on",
  initialValue = "",
  updateValue,
  required = false,
  disabled = false,
  className = "",
}) => {
  const [value, setValue] = useState(initialValue);

  return (
    <label className={` ${className}`}>
      {label}
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => updateValue(e, setValue)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        disabled={disabled}
      />
    </label>
  );
};

export default PasswordInput;
