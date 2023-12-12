import React, { useState, useEffect } from "react";

const Select = ({ onChange }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Fetch options from an API or any other data source
    const fetchOptions = async () => {
      try {
        // const response = await fetch('https://api.example.com/options');
        // const data = await response.json();
        const data = [
          { id: 1, label: "Option 1" },
          { id: 2, label: "Option 2" },
          { id: 3, label: "Option 3" },
        ];
        setOptions(data);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchOptions();
  }, []);

  const handleOptionChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="component">
      <label className="input-label">Select</label>
      <div className="component">
        <select name="select" onChange={handleOptionChange}>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
