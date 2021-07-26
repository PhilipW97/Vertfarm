import React from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const TempChart = ({ tempData }) => (
  <Wrapper>
    <ResponsiveContainer height="100%" width="100%">
      <LineChart
        data={tempData}
        margin={{
          top: 25,
          right: 0,
          left: -25,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" minTickGap={20} />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="temp"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  </Wrapper>
);

const Wrapper = styled.div`
  height: 350px;
  width: 100%;

  margin: 20px 0px;
`;
