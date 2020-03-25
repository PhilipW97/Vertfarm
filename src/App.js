import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Chart } from "./components/Chart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sickest Data on planet earth, collected and displayed by Adrian and
          Philip. Stay tuned!!
        </p>
      </header>
      <Chart />
    </div>
  );
}

export default App;
