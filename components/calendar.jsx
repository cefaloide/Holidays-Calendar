import React from "react";
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

export const Calendar = ({ year, holidays }) => {
  const month = 2;
  const monthDaysList = getMonthDaysList(year, month);
  return (
    <div>
      <Title>Month: {month}</Title>
      <CalendarGrid>
        {monthDaysList.map(day => (
          <div key={day}>{formatDate(day)}</div>
        ))}
      </CalendarGrid>
    </div>
  );
};
