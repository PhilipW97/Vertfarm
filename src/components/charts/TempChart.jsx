import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const TempChart = () => {
  const [temp, setTemp] = useState([]);

  const fetchData = async () => {
    let newTemp = await fetch("https://vertfarm.herokuapp.com/temp");
    let jsonTemp = await newTemp.json();
    jsonTemp.forEach((temp) => {
      temp.date = moment(temp.date).format("HH:mm");
    });
    setTemp(jsonTemp);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      <ResponsiveContainer height="100%" width="100%">
        <LineChart
          data={temp}
          margin={{
            top: 25,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 200px;
  width: 100%;
  max-width: 800px;
`;
