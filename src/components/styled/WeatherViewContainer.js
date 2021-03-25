import styled from "styled-components";

export const WeatherViewContainer = styled.div`
    display: flex;
    flex: 1;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;
