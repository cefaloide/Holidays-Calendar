import React from "react";
import fetch from "isomorphic-unfetch";
import { Calendar } from "../components/calendar";
import styled from "styled-components";

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

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CountrySelect = styled.div`
  margin: 5px;
`;

const Index = () => {
  const currentYear = new Date().getFullYear();
  const [countries, setCountries] = React.useState([]);
  const [country, setCountry] = React.useState("ES");
  const [holidays, setHolidays] = React.useState([]);

  React.useEffect(() => {
    getHolidays(currentYear, country).then(setHolidays);
    getCountries().then(setCountries);
  }, []);

  const changeSelection = e => {
    const selectedCountryKey = e.target.value;
    setCountry(selectedCountryKey);
    getHolidays(currentYear, selectedCountryKey).then(setHolidays);
  };

  return (
    <AppContainer>
      <CountrySelect>
        <label htmlFor="countries">Pick the country: </label>
        <select id="countries" onChange={changeSelection} value={country}>
          >
          {countries.map(country => {
            return (
              <option key={country.key} value={country.key}>
                {country.value}
              </option>
            );
          })}
        </select>
      </CountrySelect>
      <Calendar year={currentYear} holidays={holidays} />
    </AppContainer>
  );
};

export default Index;
