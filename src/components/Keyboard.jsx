import React, { useState, useEffect } from "react";
import KeyRow from "./KeyRow";
import "../styles/Keyboard.scss";
import { computerKeypad } from "../helper";

const navKeys = [];
const arrowKeys = [];

const Keyboard = ({ currentKey, theme = "light", onInit }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(theme === "dark");

  useEffect(() => {
    setIsDarkTheme(theme === "dark");
  }, [theme]);

  useEffect(() => {
    if (onInit && typeof onInit === "function") {
      onInit();
    }
  }, [onInit]);
  return (
    <div className={`${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <div className="keyboard-container mt-3">
        <div className="main-keys">
          {computerKeypad &&
            computerKeypad.map((row, rowIndex) => (
              <KeyRow key={rowIndex} keys={row} currentKey={currentKey} />
            ))}
        </div>
        <div className="extra-keys">
          <div className="nav-keys d-flex">
            {navKeys.map((row, rowIndex) => (
              <KeyRow key={rowIndex} keys={row} currentKey={currentKey} />
            ))}
          </div>
          <div className="arrow-keys">
            {arrowKeys.map((row, rowIndex) => (
              <KeyRow key={rowIndex} keys={row} currentKey={currentKey} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
