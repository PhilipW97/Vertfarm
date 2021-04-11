import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { StyledWrapper } from "../Wrapper";
import { TempChart } from "./TempChart";
import { Header } from "../Header";
import { getTemp } from "../api";

export const Temperature = () => {
  const [tempData, setTempData] = useState();

  const getData = async (date = new Date()) => {
    // Get start of first day and end of last day
    const startDate = date;
    const endDate = new Date(startDate.getTime());
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 99);

    const isoStartDate = startDate.toISOString();
    const isoEndDate = endDate.toISOString();

    const temp = await getTemp(isoStartDate, isoEndDate);
    setTempData(temp);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledWrapper>
      <TemperatureWrapper>
        <Header title="Temperature" subTitle="Chart" onChange={getData} />
        <TempChart tempData={tempData} />
      </TemperatureWrapper>
    </StyledWrapper>
  );
};

const TemperatureWrapper = styled.div`
  width: 100%;
`;
