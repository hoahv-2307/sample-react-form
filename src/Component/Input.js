import React, { useState } from "react";

const Input = ({ onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div>
      <div className="component form-group">
        <label className="input-label">Input</label>
        <input type="text" name="input" value={value} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Input;
