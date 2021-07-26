import React from "react";
import styled from "styled-components";

export const NoData = () => (
  <NoDataWrapper>
    Sorry, but there is no data available for your selected date.
  </NoDataWrapper>
);

const NoDataWrapper = styled.div`
  width: 100%;
  padding: 30px 10px 20px 10px;
  box-sizing: border-box;
  text-align: center;

  line-height: 1.5;

  color: #${(p) => p.theme.colors.primaryTextColor};
`;
