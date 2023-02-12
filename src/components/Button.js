import React from "react";

function Button({ text, isClickButton, manageClick }) {
  retunr(
    <button
      className={isClickButton ? "clickButton" : "resetButton"}
      onClick={manageClick}
    >
      {text}
    </button>
  );
}

export default Button;
