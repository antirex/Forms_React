import React from "react";
import Input from "./Input";
function Form(props) {
  return (
    <form onSubmit={props.click}>
      <Input func={props.change} input={props.input} place="First Name" />
      <Input func={props.newChange} input={props.next} place="Last Name" />
      <button
        onMouseOver={props.hover}
        onMouseOut={props.unhover}
        style={props.styles}
      >
        Submit
      </button>
    </form>
  );
}
export default Form;
