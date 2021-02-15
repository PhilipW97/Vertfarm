import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { COLORS } from "./constants";

const App = () => (
  <ThemeProvider theme={{ colors: COLORS }}>
    <MainWrapper>
      <Header />
    </MainWrapper>
  </ThemeProvider>
);

export default App;

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  background: #${(p) => p.theme.colors.backgroundColor};
`;
