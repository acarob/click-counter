import "./App.css";
import freeCodeCampLogo from "./images/FreeCodeCamp_logo.png";
import Button from "./components/Button";

function App() {
  const manageClick = () => {
    console.log("Click");
  };

  const resetCounter = () => {
    console.log("Reset");
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="freecodecamp logo"
        />
      </div>
      <div className="main-container">
        <Button text="Click" isClickButton={true} manageClick={manageClick} />
        <Button text="Reset" isClickButton={false} manageClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
