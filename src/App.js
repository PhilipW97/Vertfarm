import React from "react";
import { TempChart } from "./components/charts/TempChart";
import { LightChart } from "./components/charts/LightChart";
import { Header } from "./components/Header";

import styled from "styled-components";

const App = () => (
  <div className="App">
    <Wrapper>
      <Header header="Temperature" />
      <TempChart />
      
    </Wrapper>
    <Wrapper>
      <Header header="Light" />
      <LightChart />
    </Wrapper>
  </div>
)
   

export default App;

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  background: white;
  padding: 20px 0px;
`;
