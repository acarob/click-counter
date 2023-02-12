import "./App.css";
import freeCodeCampLogo from "./images/FreeCodeCamp_logo.png";

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="freecodecamp logo"
        />
      </div>
      <div className="main-container"></div>
    </div>
  );
}

export default App;
