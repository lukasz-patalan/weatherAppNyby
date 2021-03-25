import React from "react";
import { GiWindsock } from "react-icons/gi";
import { RiTempHotLine } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";
import { AiFillCloud } from "react-icons/ai";

import { ExtraInfoRow } from "./styled/extraInfos/ExtraInfoRow";
import { ExtraInfoTitle } from "./styled/extraInfos/ExtraInfoTitle";
import { ExtraInfoWrapper } from "./styled/extraInfos/ExtraInfoWrapper";
import { IconWrapper } from "./styled/IconWrapper";

export const ExtraWeatherInfo = ({
    windSpeed,
    airPressure,
    humidity,
    clouds
}) => {
    return (
        <ExtraInfoWrapper>
            <ExtraInfoRow>
                <ExtraInfoTitle>
                    <IconWrapper>
                        <GiWindsock />
                    </IconWrapper>
                    wind speed:
                </ExtraInfoTitle>
                {windSpeed} m/s
            </ExtraInfoRow>
            <ExtraInfoRow>
                <ExtraInfoTitle>
                    <IconWrapper>
                        <RiTempHotLine />
                    </IconWrapper>
                    air pressure:
                </ExtraInfoTitle>
                {airPressure} hPa
            </ExtraInfoRow>
            <ExtraInfoRow>
                <ExtraInfoTitle>
                    <IconWrapper>
                        <WiHumidity />
                    </IconWrapper>
                    relative humidity:
                </ExtraInfoTitle>
                {humidity} %
            </ExtraInfoRow>
            <ExtraInfoRow>
                <ExtraInfoTitle>
                    <IconWrapper>
                        <AiFillCloud />
                    </IconWrapper>
                    cloud area fraction:
                </ExtraInfoTitle>
                {clouds} %
            </ExtraInfoRow>
        </ExtraInfoWrapper>
    );
};
