"use client";
import { useState } from "react";

const GenericInput = ({
  cols = 30,
  rows = 10,
  label = "Default label",
  name,
  initialValue = "",
  updateValue,
}) => {
  const [value, setValue] = useState(initialValue);

  return (
    <label>
      {label}
      <textarea
        name={name}
        cols={cols}
        rows={rows}
        value={value}
        onChange={(e) => updateValue(e, setValue)}
      />
    </label>
  );
};

export default GenericInput;
