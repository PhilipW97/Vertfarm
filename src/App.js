import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { MainHeader } from "./components/MainHeader";
import { darkTheme, lightTheme } from "./constants";
import { useDarkTheme } from "./components/hooks/useDarkTheme/useDarkTheme";
import { Temperature } from "./components/temperature/Temperature";
import { Light } from "./components/light/Light";

const App = () => {
  const [theme, toggleTheme] = useDarkTheme();
  const hasDarkTheme = theme === "dark";
  const currentTheme = hasDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={{ colors: currentTheme }}>
      <MainWrapper>
        <MainHeader
          hasDarkTheme={hasDarkTheme}
          toggleTheme={() => toggleTheme()}
        />
        <Temperature />
        <Light />
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
