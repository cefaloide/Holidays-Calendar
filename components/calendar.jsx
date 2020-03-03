import React, { useState } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import { Day } from "./day";

const getMonthDays = (year, month) => new Date(year, month, 0).getDate();

const getDate = (year, month, day) => new Date(year, month, day);

const formatDate = date => {
  return dayjs(date).format("DD");
};
const formatToYearMonthDay = date => {
  return dayjs(date).format("YYYY-MM-DD");
};

const getMonthDaysList = (year, month) => {
  const monthDays = getMonthDays(year, month);
  return Array.from({ length: monthDays }, (_, day) =>
    getDate(year, month - 1, day + 1)
  );
};

const CalendarContainer = styled.div`
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background: LightCoral;
  border-radius: 5px 5px 0px 0px;
`;
const Title = styled.div`
  display: inline-block;
  margin: 0.5rem;
  color: white;
  font-weight: bold;
`;
const CalendarGrid = styled.div`
  display: grid;
  grid-row-gap: 10px;
  width: 600px;
  grid-template-columns: repeat(7, 1fr);
  border-radius: 0px 0px 5px 5px;
  padding: 5px;
`;
const CalendarButton = styled.button`
  background-color: lightcoral;
  border: 1px solid white;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  margin: 5px;
`;

const firstMonth = 1;
const lastMonth = 12;

export const Calendar = ({ year, holidays }) => {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const [month, setMonth] = useState(currentMonth);
  const monthDaysList = getMonthDaysList(year, month);
  const prevMonth = () => {
    if (month > firstMonth) {
      setMonth(month - 1);
    }
  };
  const nextMonth = () => {
    if (month < lastMonth) {
      setMonth(month + 1);
    }
  };
  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarButton id="prevMonth" type="button" onClick={prevMonth}>
          &#60;
        </CalendarButton>
        <Title>
          {months[month - 1]} {year}
        </Title>
        <CalendarButton id="nextMonth" type="button" onClick={nextMonth}>
          &#62;
        </CalendarButton>
      </CalendarHeader>
      <CalendarGrid>
        {monthDaysList.map(day => {
          const foundDay = holidays.find(
            holiday => holiday.date === formatToYearMonthDay(day)
          );

          const isToday =
            formatToYearMonthDay(today) === formatToYearMonthDay(day)
              ? true
              : false;

          return (
            <Day
              key={day}
              day={formatDate(day)}
              holiday={foundDay}
              isToday={isToday}
            />
          );
        })}
      </CalendarGrid>
    </CalendarContainer>
  );
};
