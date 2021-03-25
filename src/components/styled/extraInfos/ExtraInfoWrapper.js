import styled from "styled-components";

export const ExtraInfoWrapper = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 20px;
    color: #fff;

    @media (max-width: 768px) {
        margin-left: unset;
        width: 50%;
    }

    @media (max-width: 610px) {
        width 290px;
    }
`;
