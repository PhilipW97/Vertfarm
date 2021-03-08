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

export { getTemp };
