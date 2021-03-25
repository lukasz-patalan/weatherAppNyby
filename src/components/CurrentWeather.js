import React from "react";
import { FiSun } from "react-icons/fi";

import { CurrentWeatherWrapper } from "./styled/CurentWeatherWrapper";
import { DegreeWrapper } from "./styled/DegreeWrapper";
import { TemperatureWrapper } from "./styled/TemperatureWrapper";

export const CurrentWeather = ({ temperature }) => {
    return (
        <CurrentWeatherWrapper>
            <FiSun size={50} color="#FFE400" />
            <TemperatureWrapper>{temperature}</TemperatureWrapper>
            <DegreeWrapper>{"\u00b0"}C</DegreeWrapper>
        </CurrentWeatherWrapper>
    );
};
