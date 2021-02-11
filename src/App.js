import React from "react";
import { ThemeProvider } from "styled-components";
import { COLORS } from "./constants";

const App = () => <ThemeProvider theme={{ colors: COLORS }}></ThemeProvider>;

export default App;
