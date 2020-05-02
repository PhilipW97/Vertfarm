import React, { useEffect, useState } from "react";
import moment from "moment";
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip } from "recharts";

export const LightChart = () => {
  const range = [0, 250];
  const [data, setData] = useState([]);

  const getHours = date => {
    return moment(moment(date).format("HH:mm"), "HH:mm").diff(
      moment().startOf("day"),
      "hours"
    );
  };

  const getDayData = data => {
    let dates = [];
    data.forEach(content => {
      const date = moment(content.date).format("DD.MM.YYYY");

      if (!dates[date]) {
        dates[date] = [];
      }
      dates[date].push(content);
    });
    return dates;
  };

  const getFinalList = timeFrames => {
    let finalData = [];
    Object.keys(timeFrames).forEach(times => {
      let day = [];
      for (let i = 0; i < 25; i++) {
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
    times.forEach(timeRange => {
      if (timeRange[0] <= index && index <= timeRange[1]) {
        isOff = true;
      }
    });

    return isOff;
  };

  const getTimeFrames = dates => {
    let timeFrames = [];
    Object.keys(dates).forEach(key => {
      let anotherList = [];
      dates[key].forEach((value, index) => {
        const nextOne = dates[key][index + 1];

        if (value.lightState) {
          // Is true
          if (index === dates[key].length - 1) {
            // Is last one
            anotherList.push([getHours(value.date), 24]);
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

  const fetchData = () => {
    const data = [
      { date: "2020-04-30T03:30:00.000Z", lightState: false },
      { date: "2020-04-30T07:30:00.000Z", lightState: true },
      { date: "2020-05-01T17:30:00.000Z", lightState: false }
    ];

    let dates = getDayData(data);
    let timeFrames = getTimeFrames(dates);
    setData(getFinalList(timeFrames));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data.map(data => {
        return (
          <ScatterChart
            width={800}
            height={60}
            margin={{
              top: 10,
              right: 0,
              bottom: 0,
              left: 0
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
              height={10}
              width={80}
              tick={false}
              tickLine={false}
              axisLine={false}
              label={{ value: data[0].date, position: "insideRight" }}
            />
            <ZAxis type="number" dataKey="value" range={range} />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              wrapperStyle={{ zIndex: 100 }}
            />
            <Scatter data={data} fill="#8884d8" />
          </ScatterChart>
        );
      })}
    </div>
  );
};
