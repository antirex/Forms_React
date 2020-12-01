import React, { useState } from "react";
import Heading from "./Heading";
function App() {
  const [heading, setHeading] = useState("");
  const [styles, setStyles] = useState(false);
  const [input, setInput] = useState("");
  function handleChange(event) {
    setInput(event.target.value);
  }
  function handleClick(event) {
    setHeading(input);
    setInput("");
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
      <Heading
      heading = {heading}
      />
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={input}
        />
        <button
          onMouseOver={hoverButton}
          onMouseOut={unHoverButton}
          style={{ backgroundColor: styles && "black" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
