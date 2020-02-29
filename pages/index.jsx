import React from "react";
import fetch from "isomorphic-unfetch";
import { Calendar } from "../components/calendar";

/*** Nager.Date Public Holiday API (https://date.nager.at/Api) ***/

// single country yearly holidays
const getHolidays = async (year, country) => {
  const res = await fetch(
    `https://date.nager.at/api/v2/PublicHolidays/${year}/${country}`
  );
  return res.json();
};
// available countries
const getCountries = async () => {
  const res = await fetch("https://date.nager.at/api/v2/AvailableCountries");
  return res.json();
};

const Index = () => {
  const year = 2020;
  const country = "CO";
  const [holidays, setHolidays] = React.useState([]);

  React.useEffect(() => {
    getHolidays(year, country).then(setHolidays);
  }, []);

  return <Calendar year={year} holidays={holidays} />;
};

export default Index;
