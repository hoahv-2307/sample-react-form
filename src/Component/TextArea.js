import React, { useState, useEffect } from "react";

const TextArea = ({ onChange }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Text has changed:", text);
  }, [text]);

  const handleChange = (event) => {
    setText(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="component">
      <label className="input-label">Text Area</label>
      <textarea name="text-area" value={text} onChange={handleChange} />
    </div>
  );
};

export default TextArea;
