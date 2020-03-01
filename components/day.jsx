import React from "react";
import styled from "styled-components";

const Holiday = styled.div`
  border: 1px solid black;
  background: LightCoral;
  ${({ isToday }) =>
    isToday &&
    ` 
    font-weight: bold;
    color:DodgerBlue;
    border: 2px solid DodgerBlue;
  `}
`;

const NormalDay = styled.div`
  border: 1px solid black;
  ${({ isToday }) =>
    isToday &&
    ` 
    font-weight: bold;
    color:DodgerBlue;
    border: 2px solid DodgerBlue;
  `}
`;

export const Day = ({ day, holiday, isToday }) => {
  if (holiday) {
    return (
      <Holiday isToday={isToday}>
        {day}
        <div>{holiday.name}</div>
      </Holiday>
    );
  }
  return <NormalDay isToday={isToday}>{day}</NormalDay>;
};
