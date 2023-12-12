import React, { useState, useEffect } from "react";

const CheckboxMultiOption = ({ onChange }) => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

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

  const handleOptionChange = (optionId) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
      onChange(selectedOptions.filter((id) => id !== optionId));
    } else {
      setSelectedOptions([...selectedOptions, optionId]);
      onChange([...selectedOptions, optionId]);
    }
  };

  return (
    <div className="component">
      <label className="input-label">Checkbox Multi Option</label>
      <div className="component">
        {options.map((option) => (
          <label key={option.id}>
            <input
              type="checkbox"
              name="checkbox-multi"
              value={option.id}
              checked={selectedOptions.includes(option.id)}
              onChange={() => handleOptionChange(option.id)}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxMultiOption;
