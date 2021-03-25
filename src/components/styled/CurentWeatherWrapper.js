import styled from "styled-components";

export const CurrentWeatherWrapper = styled.div`
    background: linear-gradient(
        169deg,
        rgb(0, 108, 179) 0%,
        rgb(0, 212, 255) 94%,
        rgb(192, 244, 255) 100%
    );
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    @media (max-width: 768px) {
        height: 150px;
        border-radius: 20px;
        margin-bottom: 20px;
    }
`;
