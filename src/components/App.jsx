import React, { useState } from "react";
import Heading from "./Heading";
import Form from "./Form";
function App() {
  const [heading, setHeading] = useState("");
  const [styles, setStyles] = useState(false);
  const [input, setInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  function handleChange(event) {
    setInput(event.target.value);
  }
  function newHandleChange(event) {
    setSecondInput(event.target.value);
  }
  function handleClick(event) {
    setHeading(input + " " + secondInput);
    setInput("");
    setSecondInput("");
    event.preventDefault();
  }
  function hoverButton() {
    setStyles(true);
  }
  function unHoverButton() {
    setStyles(false);
  }
  return (
    <div className="container">
      <Heading heading={heading} />
      <Form
        click={handleClick}
        hover={hoverButton}
        change={handleChange}
        next={secondInput}
        newChange={newHandleChange}
        input={input}
        unhover={unHoverButton}
        styles={{ backgroundColor: styles && "black" }}
      />
    </div>
  );
}

export default App;
