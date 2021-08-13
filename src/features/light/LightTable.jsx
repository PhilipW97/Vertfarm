import React from "react";
import styled from "styled-components";

export const LightTable = ({ lightData }) => {
  return (
    <TableWrapper>
      <Table cellSpacing="0">
        {lightData.map((light, index) => (
          <tbody key={index}>
            <TableRow>
              <TableElement>{light.date}</TableElement>
              <TableElement state={light.lightState}>
                {light.lightState ? "ON" : "OFF"}
              </TableElement>
            </TableRow>
          </tbody>
        ))}
      </Table>
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  width: 100%;
  max-height: 400px;

  margin-top: 20px;
  overflow-y: scroll;
`;

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
