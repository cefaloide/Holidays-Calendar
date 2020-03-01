import React from "react";
import styled from "styled-components";

const Holiday = styled.div`
  background: LightCoral;
`;

export const Day = ({ day, holiday }) => {
  if (holiday) {
    return (
      <Holiday>
        {day} {holiday.name}
      </Holiday>
    );
  }
  return <div>{day}</div>;
};
