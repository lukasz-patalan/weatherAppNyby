import styled from "styled-components";

export const DegreeWrapper = styled.span`
    position: relative;
    bottom: 20px;
    font-size: 60px;
    font-weight: 400;
    color: white;

    @media (max-width: 768px) {
        font-size: 40px;
    }
    @media (max-width: 500px) {
        font-size: 30px;
    }
`;
