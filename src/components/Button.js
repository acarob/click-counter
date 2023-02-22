import React from "react";
import "../styleSheets/Button.css";

function Button({ text, isClickButton, manageClick }) {
  return (
    <button
      className={isClickButton ? "clickButton" : "resetButton"}
      onClick={manageClick}
    >
      {text}
    </button>
  );
}

export default Button;
