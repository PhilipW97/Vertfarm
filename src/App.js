import React from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { COLORS } from "./constants";

import styled from "styled-components";

const App = () => (
  <ThemeProvider theme={{ colors: COLORS }}>
  </ThemeProvider>
);

export default App;

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  background: white;
  padding: 20px 0px;
`;
