import React from "react";
import logo from "./logo.png";
import "./App.css";
import { TempChart } from "./components/TempChart";
import { LightChart } from "./components/LightChart";
import { Header } from "./components/Header";

import styled from "styled-components";

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
      <Wrapper>
        <Header header="Temperature" />
        <TempChart />
      </Wrapper>
      <Wrapper>
        <Header header="Light" />
        <LightChart />
      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  background: white;
  padding: 20px 0px;
`;
