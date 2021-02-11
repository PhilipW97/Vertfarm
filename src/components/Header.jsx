import React from "react";
import styled from "styled-components";

export const Header = (props) => {
  return (
    <HeaderBar>
      <HeaderBarContent>
        <HeaderTitle>Vertfarm</HeaderTitle>
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
  max-width: 1000px;

  margin: 0 auto;
`;

const HeaderTitle = styled.h1`
  margin: 0px;

  color: #${(p) => p.theme.colors.textColor};
`;
