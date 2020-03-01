import React, { useState } from "react";
import dayjs from "dayjs";
import styled from "styled-components";

const getMonthDays = (year, month) => new Date(year, month, 0).getDate();

const getDate = (year, month, day) => new Date(year, month, day);

const formatDate = date => dayjs(date).format("DD");

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
  const [month, setMonth] = useState(2);
  const [count, setCount] = useState(0);
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
      <Title>Month: {month}</Title>
      <button id="nextMonth" type="button" onClick={nextMonth}>
        +
      </button>
      <CalendarGrid>
        {monthDaysList.map(day => (
          <div key={day}>{formatDate(day)}</div>
        ))}
      </CalendarGrid>
    </div>
  );
};
