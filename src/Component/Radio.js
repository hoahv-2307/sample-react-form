import React, { useState, useEffect } from "react";

const Radio = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Code to be executed when the component mounts or when selectedOption changes

    // Example: Log the selected option
    console.log("Selected option:", selectedOption);
    const data = [
      { id: 1, label: "Option 1" },
      { id: 2, label: "Option 2" },
      { id: 3, label: "Option 3" },
    ];
    setOptions(data);
    // Example: Fetch data based on the selected option
    // fetchData(selectedOption);

    // Example: Subscribe to a WebSocket based on the selected option
    // subscribeToWebSocket(selectedOption);

    // Cleanup function
    return () => {
      // Code to be executed when the component unmounts or when selectedOption changes
      // Example: Unsubscribe from the WebSocket
      // unsubscribeFromWebSocket();
    };
  }, [selectedOption]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    onChange(event.target.value);
  };
  // return (
  //   <div>
  //     <label>
  //       {options.map((option) => (
  //         <input
  //           type='radio'
  //           name='radio'
  //           value={option.id}
  //           checked={selectedOption === option.id}
  //           onChange={handleOptionChange}/>
  //       ))}
  //       {/* <input
  //         type="radio"
  //         name='radio'
  //         value="1"
  //         checked={selectedOption === '1'}
  //         onChange={handleOptionChange}
  //       />
  //       Option 1 */}
  //     </label>
  //   </div>
  // );

  return (
    <div className="component">
      <label className="input-label">Radio</label>
      <div className="component">
        <label key="1">
          <input
            type="radio"
            name="radio"
            value="1"
            checked={selectedOption === "1"}
            onChange={handleOptionChange}
          />
          Option 1
        </label>
        <label key="2">
          <input
            type="radio"
            name="radio"
            value="2"
            checked={selectedOption === "2"}
            onChange={handleOptionChange}
          />
          Option 2
        </label>
        <label key="3">
          <input
            type="radio"
            name="radio"
            value="3"
            checked={selectedOption === "3"}
            onChange={handleOptionChange}
          />
          Option 3
        </label>
      </div>
    </div>
  );
};

export default Radio;
