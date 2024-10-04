import React from "react";

const KeyButton = ({ keyName, currentKey, extraClass }) => {
  const isSelected = currentKey?.toUpperCase() === keyName?.toUpperCase();
  const baseClass = `key-button ${isSelected ? "text-primary selected-key" : ""}`;
  
  const getClassNames = () => {
    switch (keyName) {
      case "Backspace":
        return `${baseClass} backspace-key shift-key`;
      case "Tab":
        return `${baseClass} tab-key`;
      case "Caps Lock":
        return `${baseClass} capslock-key`;
      case "Enter":
        return `${baseClass} enter-key`;
      case "Shift":
        return `${baseClass} shift-key`;
      case "Space":
        return `${baseClass} space-button`;
      default:
        return `${baseClass} ${extraClass || ""}`;
    }
  };

  return <button className={getClassNames()}>{keyName}</button>;
};

export default KeyButton;
