import "./App.css";
import React, { useState } from "react";
import Input from "./Component/Input";
import Checkbox from "./Component/Checkbox";
import Select from "./Component/Select";
import CheckboxMultiOption from "./Component/CheckboxMultiOption";
import TextArea from "./Component/TextArea";
import BotScript from "./Component/BotScript";
import Radio from "./Component/Radio";

function App() {
  const [input, setInput] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [select, setSelect] = useState("");
  const [checkboxMultiOption, setCheckboxMultiOption] = useState([]);
  const [textArea, setTextArea] = useState("");
  const [radio, setRadio] = useState("");
  const handleInputChange = (value) => {
    setInput(value);
  };
  const handleCheckboxChange = () => {
    setCheckbox(!checkbox);
  };
  const handleSelectChange = (value) => {
    setSelect(value);
  };
  const handleCheckboxMultiOptionChange = (value) => {
    setCheckboxMultiOption(value);
  };
  const handleTextAreaChange = (value) => {
    setTextArea(value);
  };
  const handleRadioChange = (value) => {
    setRadio(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    console.log('input: ', input);
    console.log('checkbox: ', checkbox);
    console.log('select: ', select);
    console.log('checkboxMultiOption: ', checkboxMultiOption);
    console.log('textArea: ', textArea);
    console.log('radio: ', radio);
  };
  return (
    <div className="App">
      <form id="form" onSubmit={handleSubmit}>
        <BotScript />
        <Input onChange={handleInputChange} />
        <br />
        <TextArea onChange={handleTextAreaChange} />
        <br />
        <Checkbox onChange={handleCheckboxChange} />
        <br />
        <CheckboxMultiOption onChange={handleCheckboxMultiOptionChange} />
        <br />
        <Radio onChange={handleRadioChange} />
        <br />
        <Select onChange={handleSelectChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
