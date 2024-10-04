import React from "react";
import KeyButton from "./KeyButton";

const KeyRow = ({ keys, currentKey }) => (
  <div className="keyboard-row">
    {keys.map((key, index) => (
      <KeyButton key={index} keyName={key} currentKey={currentKey} />
    ))}
  </div>
);

export default KeyRow;
