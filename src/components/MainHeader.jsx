import React from "react";
import styled from "styled-components";
import { Sun } from "../icons/Sun";
import { Moon } from "../icons/Moon";

export const MainHeader = (props) => {
  const { hasDarkTheme, toggleTheme } = props;

  return (
    <HeaderBar>
      <HeaderBarContent>
        <HeaderTitle>
          Vert
          <Farm>farm</Farm>
        </HeaderTitle>
        <ThemeToggle onClick={() => toggleTheme()}>
          {hasDarkTheme ? <Sun /> : <Moon />}
        </ThemeToggle>
      </HeaderBarContent>
    </HeaderBar>
  );
};

const HeaderBar = styled.div`
  height: 85px;
  width: 100%;

  margin: 0px;

  background: #${(p) => p.theme.colors.primaryColor};
`;

const HeaderBarContent = styled.div`
  display: flex;
  align-items: center;

  height: 85px;
  width: 90%;
  max-width: 1300px;

  margin: 0 auto;
`;

const HeaderTitle = styled.h1`
  margin: 0px;

  font-family: Comfortaa;
  font-weight: 700;

  color: #${(p) => p.theme.colors.primaryTextColor};
`;

const Farm = styled.span`
  color: #${(p) => p.theme.colors.secondaryTextColor};
`;

const ThemeToggle = styled.button`
  margin-left: auto;
  cursor: pointer;

  background: none;
  border: none;

  & > svg {
    height: 35px;
    width: 35px;
  }
`;
