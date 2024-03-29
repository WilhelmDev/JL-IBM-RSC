"use client";
import { useState } from "react";

const TelInput = ({
  label = "Default label",
  name,
  placeholder = "",
  autoComplete = "on",
  initialValue = "",
  updateValue,
  required = false,
  className = "",
}) => {
  const [value, setValue] = useState(initialValue);

  return (
    <label className={` ${className}`}>
      {label}
      <input
        type="tel"
        name={name}
        value={value}
        onChange={(e) => updateValue(e, setValue)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
      />
    </label>
  );
};

export default TelInput;
