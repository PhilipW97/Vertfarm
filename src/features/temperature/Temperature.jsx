import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { StyledWrapper } from "../../components/Wrapper";
import { NoData } from "../../components/NoData";
import { TempChart } from "./TempChart";
import { Header } from "../../components/Header";
import { LoadingIndicator } from "../../components/LoadingIndicator";
import { getTemp } from "../../api";

export const Temperature = () => {
  const [tempData, setTempData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (startDate = new Date(), endDate = new Date()) => {
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 99);

    const isoStartDate = startDate.toISOString();
    const isoEndDate = endDate.toISOString();

    setIsLoading(true);
    const temp = await getTemp(isoStartDate, isoEndDate, "SecondSensor");
    const temp2 = await getTemp(isoStartDate, isoEndDate, "FirstSensor");
    setIsLoading(false);

    setTempData([...temp, ...temp2]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledWrapper>
      <TemperatureWrapper>
        <Header
          title="Temperature"
          subTitle="Chart"
          onChange={getData}
          newestData={tempData[tempData.length]}
        />
        {!isLoading ? (
          tempData.length > 0 ? (
            <TempChart tempData={tempData} />
          ) : (
            <NoData />
          )
        ) : (
          <LoadingIndicator />
        )}
      </TemperatureWrapper>
    </StyledWrapper>
  );
};

const TemperatureWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
