import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

export const Header = ({ title, subTitle, onChange }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onPickerChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    const endFallback = end ? end : new Date(start.getTime());
    onChange(start, endFallback);
  };

  const datepickerValue = `${moment(startDate).format("DD.MM.YYYY")}  ${
    endDate != null ? ` - ${moment(endDate).format("DD.MM.YYYY")}` : ""
  }`;

  return (
    <HeaderWrapper>
      <Title>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderSubtitle>{subTitle}</HeaderSubtitle>
      </Title>
      <DateButton onClick={() => setShowDatePicker(!showDatePicker)}>
        {datepickerValue}
      </DateButton>
      {showDatePicker && (
        <DatePickerOverlay>
          <DatePicker
            selected={startDate}
            onChange={onPickerChange}
            startDate={startDate}
            endDate={endDate}
            fixedHeight
            selectsRange
            dateFormat="dd.MM.yyyy"
            inline
            onClickOutside={() => setShowDatePicker(false)}
          />
        </DatePickerOverlay>
      )}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: baseline;
  justify-content: space-between;

  @media (min-width: 500px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderTitle = styled.h2`
  margin: 0px 20px 0px 0px;

  font-size: 23px;
  color: #${(p) => p.theme.colors.primaryTextColor};
`;

const HeaderSubtitle = styled.h3`
  margin: 1px 0px 0px 0px;

  color: #${(p) => p.theme.colors.tertiaryTextColor};
  font-size: 15px;
`;

const DateButton = styled.button`
  margin-right: auto;
  margin-top: 10px;
  padding: 7px 15px;

  color: #${(p) => p.theme.colors.primaryTextColor};
  font-weight: 700;
  font-family: "Comfortaa";

  background: #${(p) => p.theme.colors.secondaryColor};
  border-radius: 6px;
  border: none;

  cursor: pointer;

  @media (min-width: 500px) {
    margin-top: 0px;
    margin-left: auto;
    margin-right: 0px;
  }
`;

const DatePickerOverlay = styled.div`
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;
