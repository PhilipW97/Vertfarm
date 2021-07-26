import React, { useState, useEffect } from "react";
import { LightTable } from "./LightTable";

import "react-datepicker/dist/react-datepicker.css";

import { StyledWrapper } from "../../components/Wrapper";
import { NoData } from "../../components/NoData";
import { Header } from "../../components/Header";
import { getLight } from "../../api";
import { LoadingIndicator } from "../../components/LoadingIndicator";

export const Light = () => {
  const [lightData, setLightData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (startDate = new Date(), endDate = new Date()) => {
    // Get start of first day and end of last day
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 99);
    const isoStartDate = startDate.toISOString();
    const isoEndDate = endDate.toISOString();

    setIsLoading(true);
    const lightData = await getLight(isoStartDate, isoEndDate);
    setIsLoading(false);

    console.log("lightData", lightData);

    setLightData(lightData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledWrapper>
      <Header title="Lights" subTitle="Table" onChange={getData} />
      {!isLoading ? (
        lightData.length > 0 && lightData !== undefined ? (
          <LightTable lightData={lightData} />
        ) : (
          <NoData />
        )
      ) : (
        <LoadingIndicator />
      )}
    </StyledWrapper>
  );
};
