import "./App.css";
// import freeCodeCampLogo from "./images/FreeCodeCamp_logo.png";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [clickNum, setClickNum] = useState(0);

  const manageClick = () => {
    setClickNum(clickNum + 1);
  };

  const resetCounter = () => {
    setClickNum(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <h1 className="neon">Click Counter</h1>
        {/* <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="freecodecamp logo"
        /> */}
      </div>
      <div className="main-container">
        <Counter clickNum={clickNum}></Counter>
        <Button text="Click" isClickButton={true} manageClick={manageClick} />
        <Button text="Reset" isClickButton={false} manageClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
