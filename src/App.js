import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { darkTheme, lightTheme } from "./constants";
import { useDarkTheme } from "./components/hooks/useDarkTheme/useDarkTheme";
import { Temperature } from "./components/temperature/Temperature";

const App = () => {
  const [theme, toggleTheme] = useDarkTheme();
  const hasDarkTheme = theme === "dark";
  const currentTheme = hasDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={{ colors: currentTheme }}>
      <MainWrapper>
        <Header hasDarkTheme={hasDarkTheme} toggleTheme={() => toggleTheme()} />
        <Temperature />
      </MainWrapper>
    </ThemeProvider>
  );
};

export default App;

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  background: #${p => p.theme.colors.backgroundColor};
`;
