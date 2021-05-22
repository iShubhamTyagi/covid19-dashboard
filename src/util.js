import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 800,
  },
  recovered: {
    hex: "#006200",
    rgb: "rgb(0, 128, 0)",
    half_op: "rgba(0, 128, 0, 0.5)",
    multiplier: 800,
  },
  deaths: {
    hex: "#800080",
    rgb: "rgb(128, 0, 128)",
    half_op: "rgba(128, 0, 128, 0.5)",
    multiplier: 3000,
  },
};

export const sortData = (data) => {
  let sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

export const formatNumericsForDisplay = (stat) =>
  {return `${numeral(stat).format("0,0")}`};

export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.1}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {formatNumericsForDisplay(country.cases)}
          </div>
          <div className="info-recovered">
            Recovered: {formatNumericsForDisplay(country.recovered)}
          </div>
          <div className="info-deaths">
            Deaths: {formatNumericsForDisplay(country.deaths)}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
