import moment from "moment";

const getTemp = async date => {
  let newTemp = await fetch("https://vertfarm.herokuapp.com/temp");
  let jsonTemp = await newTemp.json();
  jsonTemp.forEach(temp => {
    temp.date = moment(temp.date).format("HH:mm");
  });
  return jsonTemp;
};

export { getTemp };
