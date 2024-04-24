import React from "react";

function Display(props){
const display=props.display
    return <div className="displayrow">
    <input readOnly value={display} placeholder="0"/> {/* Display current input or result */}
  </div>
}

export default Display;