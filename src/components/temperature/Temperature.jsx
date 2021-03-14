import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { StyledWrapper } from "../Wrapper";
import { TempChart } from "./TempChart";
import { getTemp } from "../api";

export const Temperature = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [tempData, setTempData] = useState(new Date());

  const getData = async (date = startDate) => {
    setStartDate(date);

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
        <TempHeader>
          <LeftAlign>
            <TempHeaderTitle>Temperature</TempHeaderTitle>
            <TempHeaderSubtitle>Chart</TempHeaderSubtitle>
          </LeftAlign>
          <TempDayPicker
            selected={startDate}
            onChange={(date) => getData(date)}
            dateFormat="dd.MM.yyyy"
            fixedHeight
            withPortal
          />
        </TempHeader>
        <TempChart tempData={tempData} />
      </TemperatureWrapper>
    </StyledWrapper>
  );
};

const TemperatureWrapper = styled.div`
  width: 100%;
`;

const TempHeader = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
`;

const LeftAlign = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`;

const TempHeaderTitle = styled.h2`
  margin: 0px 20px 0px 0px;

  font-size: 23px;
  color: #${(p) => p.theme.colors.primaryTextColor};
`;

const TempHeaderSubtitle = styled.h3`
  margin: 1px 0px 0px 0px;

  color: #${(p) => p.theme.colors.tertiaryTextColor};
  font-size: 15px;
`;

const TempDayPicker = styled(DatePicker)`
  margin-left: auto;
  margin-top: 10px;
  padding: 7px 15px;

  color: #${(p) => p.theme.colors.primaryTextColor};
  font-weight: 700;
  font-family: "Comfortaa";

  background: #${(p) => p.theme.colors.secondaryColor};
  border-radius: 6px;
  border: none;

  cursor: pointer;

  @media (min-width: 500px) {
    margin-top: 0px;
  }
`;
