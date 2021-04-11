import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Header = ({ title, subTitle, onChange }) => {
  const [startDate, setStartDate] = useState(new Date());

  const onPickerChange = (date = startDate) => {
    setStartDate(date);
    onChange(date);
  };

  return (
    <HeaderWrapper>
      <Title>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderSubtitle>{subTitle}</HeaderSubtitle>
      </Title>
      <DayPicker
        selected={startDate}
        onChange={(date) => onPickerChange(date)}
        dateFormat="dd.MM.yyyy"
        fixedHeight
        withPortal
      />
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

const DayPicker = styled(DatePicker)`
  margin-left: auto;
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
  }
`;
