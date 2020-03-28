import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

export const Chart = () => {
  const [temp, setTemp] = useState([]);

  const fetchData = async () => {
    let newTemp = await fetch("https://vertfarm.herokuapp.com/temp");
    let jsonTemp = await newTemp.json();
    console.log("newTemp", jsonTemp);
    jsonTemp.map(temp => {
      temp.date = moment(temp.date).format("DD.MM");
      //temp.date = moment(temp.date).format("DD.MM.YYYY, HH:mm:ss");
    });
    setTemp(jsonTemp);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LineChart
      width={500}
      height={300}
      data={temp}
      margin={{
        top: 25,
        right: 30,
        left: 20,
        bottom: 5
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
  );
};
