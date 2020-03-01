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

const Title = styled.div`
  margin-bottom: 1rem;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-row-gap: 10px;
  width: 600px;
  grid-template-columns: repeat(7, 1fr);
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
    <div>
      <button id="prevMonth" type="button" onClick={prevMonth}>
        -
      </button>
      <Title>
        {months[month - 1]} {year}
      </Title>
      <button id="nextMonth" type="button" onClick={nextMonth}>
        +
      </button>
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
    </div>
  );
};
