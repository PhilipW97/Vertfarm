import moment from "moment";

const getTemp = async (startDate, endDate) => {
  let newTemp = await fetch(
    `https://vertfarm.herokuapp.com/temp?endDate=${endDate}&startDate=${startDate}`
  );
  let jsonTemp = await newTemp.json();
  jsonTemp.forEach((temp) => {
    temp.date = moment(temp.date).format("HH:mm");
  });
  return jsonTemp;
};

const getLight = async (startDate, endDate) => {
  let light = await fetch(
    `https://vertfarm.herokuapp.com/light?startDate=${startDate}&endDate=${endDate}`
  );
  let jsonLight = await light.json();

  jsonLight
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .forEach(
      (light) => (light.date = moment(light.date).format("DD.MM.YYYY HH:mm"))
    );

  return jsonLight;
};

export { getTemp, getLight };
