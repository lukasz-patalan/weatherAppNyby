import styled from "styled-components";

export const TemperatureWrapper = styled.span`
    font-size: 75px;
    color: #fff;
    font-weight: bold;
    margin-left: 15px;

    @media (max-width: 768px) {
        font-size: 60px;
    }
    @media (max-width: 500px) {
        font-size: 40px;
    }
`;
