import React from "react";
function Input(props) {
  return (
    <input
      onChange={props.func}
      type="text"
      placeholder={props.place}
      value={props.input}
    />
  );
}
export default Input;
