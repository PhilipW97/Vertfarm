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
        <ContentWrapper>
          <Temperature />
          <Light />
        </ContentWrapper>
      </MainWrapper>
    </ThemeProvider>
  );
};

export default App;

const MainWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  box-sizing: border-box;

  padding-bottom: 30px;

  background: #${(p) => p.theme.colors.backgroundColor};
`;

const ContentWrapper = styled.div`
  width: 90%;
  max-width: 1300px;

  margin: 0 auto;
`;
