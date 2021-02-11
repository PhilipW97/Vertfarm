import React, { useEffect, useState } from "react";
import styled from "styled-components";

import moment from "moment";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const LightChart = () => {
  const range = [0, 250];
  const [data, setData] = useState([]);
  const from = moment().subtract(3, "days").format("YYYY-MM-DD");

  const getHours = (date) => {
    return moment(moment(date).format("HH:mm"), "HH:mm").diff(
      moment().startOf("day"),
      "hours"
    );
  };

  const getDayData = (data) => {
    let dates = [];
    data.forEach((content) => {
      if (content.lightState !== undefined) {
        const date = moment(content.date).format("DD.MM.YYYY");

        if (!dates[date]) {
          dates[date] = [];
        }
        dates[date].push(content);
      }
    });
    return dates;
  };

  const getFinalList = (timeFrames) => {
    let finalData = [];
    Object.keys(timeFrames).forEach((times) => {
      let day = [];
      for (let i = 0; i < 24; i++) {
        const isOnn = isOn(i, timeFrames[times]);
        if (isOnn) {
          day.push({ hour: i, index: 1, value: 250, date: times });
        } else {
          day.push({ hour: i, index: 1, value: 0, date: times });
        }
      }
      finalData.push(day);
    });

    return finalData;
  };

  const isOn = (index, times) => {
    let isOff = false;
    times.forEach((timeRange) => {
      if (timeRange[0] <= index && index <= timeRange[1]) {
        isOff = true;
      }
    });

    return isOff;
  };

  const getTimeFrames = (dates) => {
    let timeFrames = [];
    Object.keys(dates).forEach((key) => {
      let anotherList = [];
      dates[key].forEach((value, index) => {
        const nextOne = dates[key][index + 1];

        if (value.lightState) {
          // Is true
          if (index === dates[key].length - 1) {
            // Is last one
            anotherList.push([getHours(value.date), 23]);
            return;
          }

          if (!nextOne.lightState) {
            anotherList.push([getHours(value.date), getHours(nextOne.date)]);
          }
        } else {
          // Is false
          if (index === 0) {
            // Is first one
            anotherList.push([0, getHours(value.date)]);
          }
        }
      });

      timeFrames[key] = anotherList;
    });
    return timeFrames;
  };

  const fetchData = async () => {
    let newLight = await fetch(
      `https://vertfarm.herokuapp.com/light?from=${from}`
    );
    let jsonLight = await newLight.json();

    console.log("jsonLight", jsonLight);

    if (jsonLight.length) {
      let dates = getDayData(jsonLight);
      let timeFrames = getTimeFrames(dates);

      setData(getFinalList(timeFrames));
      return;
    }

    setData([]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollWrapper>
      {data.map((data) => (
        <>
          <Date>{data[0].date}</Date>
          <ChartWrapper>
            <ResponsiveContainer height="100%" width="100%">
              <ScatterChart
                width={800}
                height={20}
                margin={{
                  top: 10,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
              >
                <XAxis
                  type="category"
                  dataKey="hour"
                  name="hour"
                  interval={0}
                  tickLine={{ transform: "translate(0, -6)" }}
                />
                <YAxis
                  type="number"
                  dataKey="index"
                  height={0}
                  width={0}
                  tick={false}
                  tickLine={false}
                  axisLine={false}
                />
                <ZAxis type="number" dataKey="value" range={range} />
                <Tooltip wrapperStyle={{ zIndex: 100 }} />
                <Scatter data={data} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </ChartWrapper>
        </>
      ))}
    </ScrollWrapper>
  );
};

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 800px;
  max-width: 800px;
  height: 70px;
  overflow-x: auto;
  padding: 10px;
`;

const ScrollWrapper = styled.div`
  overflow: auto;
  margin-left: 20px;
  white-space: nowrap;
`;

const Date = styled.div`
  text-align: left;
  margin-left: 15px;
  font-weight: 500;
`;
