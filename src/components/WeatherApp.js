import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import { PageWrapper } from "./styled/PageWrapper";
import { HeaderWrapper } from "./styled/HeaderWrapper";
import { WeatherViewContainer } from "./styled/WeatherViewContainer";
import { ErrorWrapper } from "./styled/ErrorWrapper";
import { CurrentWeather } from "./CurrentWeather";
import { ExtraWeatherInfo } from "./ExtraWeatherInfo";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const WeatherApp = () => {
    const [userLatitude, setUserLatitude] = useState("");
    const [userLongitude, setUserLongitude] = useState("");
    const [currentDate, setCurrentDate] = useState("");
    const [currentWeather, setCurrentWeather] = useState([]);
    const [isFetching, setFetching] = useState(true);
    const [errorMessage, setError] = useState("");

    const handleDateFormat = () => {
        let today = new Date();
        let dd = today.getDate();

        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        let hh = today.getHours();

        if (dd < 10) {
            dd = "0" + dd;
        }

        if (mm < 10) {
            mm = "0" + mm;
        }

        return setCurrentDate(`${yyyy}-${mm}-${dd}T${hh}`);
    };

    useEffect(() => {
        handleDateFormat();
        const getWeather = async () => {
            setFetching(true);
            try {
                const response = await axios.get(
                    `https://api.met.no/weatherapi/locationforecast/2.0/complete.json?lat=${userLatitude}&lon=${userLongitude}`
                );
                setFetching(false);
                const weatherCollection = response.data.properties.timeseries;
                const currentDateWeather =
                    currentDate &&
                    weatherCollection.filter((el) =>
                        el.time.includes(currentDate)
                    );
                setCurrentWeather(currentDateWeather);
            } catch (ex) {
                setFetching(false);
                setError("Something went wrong...");
            }
        };
        navigator.geolocation.getCurrentPosition((position) => {
            if (position.coords.latitude && position.coords.longitude)
                setUserLatitude(position.coords.latitude);
            setUserLongitude(position.coords.longitude);
        });
        if (userLatitude && userLongitude) {
            getWeather();
        }
    }, [userLatitude, userLongitude, currentDate]);

    return isFetching ? (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    ) : (
        <PageWrapper>
            <HeaderWrapper>Check weather in your location</HeaderWrapper>
            {errorMessage ? (
                <ErrorWrapper>{errorMessage}</ErrorWrapper>
            ) : (
                <WeatherViewContainer>
                    <CurrentWeather
                        temperature={
                            currentWeather[0]?.data.instant.details
                                .air_temperature
                        }
                    />
                    <ExtraWeatherInfo
                        windSpeed={
                            currentWeather[0]?.data.instant.details.wind_speed
                        }
                        airPressure={
                            currentWeather[0]?.data.instant.details
                                .air_pressure_at_sea_level
                        }
                        humidity={
                            currentWeather[0]?.data.instant.details
                                .relative_humidity
                        }
                        clouds={
                            currentWeather[0]?.data.instant.details
                                .cloud_area_fraction
                        }
                    />
                </WeatherViewContainer>
            )}
        </PageWrapper>
    );
};
