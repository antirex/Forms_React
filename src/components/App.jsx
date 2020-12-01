import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Hey there!");
  const [styles, setStyles] = useState(false);

  function handleClick() {
    setHeading("Submitted :)");
  }
  function hoverButton() {
    setStyles(true);
  }
  function unHoverButton() {
    setStyles(false);
  }
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={hoverButton}
        onMouseOut={unHoverButton}
        style={{ backgroundColor: styles && "black" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
