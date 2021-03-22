import React, { useState, useEffect } from "react";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";

import { StyledWrapper } from "../Wrapper";
import { Header } from "../Header";
import { getLight } from "../api";

export const Light = () => {
  const [lightData, setLightData] = useState([]);

  const getData = async (date = new Date()) => {
    // Get start of first day and end of last day
    const startDate = date;
    const endDate = new Date(startDate.getTime());
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 99);
    const isoStartDate = startDate.toISOString();
    const isoEndDate = endDate.toISOString();

    const lightData = await getLight(isoStartDate, isoEndDate);
    setLightData(lightData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledWrapper>
      <Header title="Lights" subTitle="Table" onChange={getData} />
      <Table cellSpacing="0">
        {lightData.length > 0 ? (
          lightData.map((light) => {
            const lightStateString = light.lightState ? "ON" : "OFF";
            return (
              <TableRow key={light.id}>
                <TableElement>{light.date}</TableElement>
                <TableElement state={light.lightState}>
                  {lightStateString}
                </TableElement>
              </TableRow>
            );
          })
        ) : (
          <>Sorry, but there is no data available for your selected date.</>
        )}
      </Table>
    </StyledWrapper>
  );
};

const Table = styled.table`
  width: 90%;

  margin: 20px 10px;

  color: #${(p) => p.theme.colors.primaryTextColor};
`;

const TableRow = styled.tr``;

const TableElement = styled.td`
  padding: 10px;
  border-top: 1px solid #${(p) => p.theme.colors.primaryTextColor};

  ${(p) => p.state !== undefined && `color: ${p.state ? "yellow" : "red"};`}
`;
