import React from "react";
import styled from "styled-components";

const Holiday = styled.div`
  text-align: center;
  padding: 0.5rem;
  color: white;
  background: LightCoral;
  ${({ isToday }) =>
    isToday &&
    ` 
    font-weight: bold;
    color:blue;
  `}
  min-height:70px;
`;

const NormalDay = styled.div`
  text-align: center;
  padding: 0.5rem;
  ${({ isToday }) =>
    isToday &&
    ` 
    font-weight: bold;
    color:blue;
  `}
  min-height:70px;
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
