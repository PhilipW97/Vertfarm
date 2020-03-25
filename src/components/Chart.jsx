import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Mon",
    pressure: 30,
    temperature: 11,
    amt: 49
  },
  {
    name: "Tue",
    pressure: 32,
    temperature: 12,
    amt: 55
  },
  {
    name: "Wed",
    pressure: 27,
    temperature: 14,
    amt: 54
  },
  {
    name: "Thur",
    pressure: 26,
    temperature: 20,
    amt: 65
  },
  {
    name: "Fri",
    pressure: 31,
    temperature: 19,
    amt: 37
  },
  {
    name: "Sat",
    pressure: 46,
    temperature: 17,
    amt: 1
  },
  {
    name: "Sun",
    pressure: 35,
    temperature: 6,
    amt: 56
  }
];

export const Chart = () => {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 25,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="temperature"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="pressure" stroke="#82ca9d" />
    </LineChart>
  );
};
