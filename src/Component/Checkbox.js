import React, { useState, useEffect } from "react";

const Checkbox = ({ onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    console.log("Checkbox state changed:", isChecked);
  }, [isChecked]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <div className="component">
      <input
        type="checkbox"
        name="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label className="input-label">Checkbox</label>
    </div>
  );
};

export default Checkbox;
