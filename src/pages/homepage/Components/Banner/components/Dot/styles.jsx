import styled, { css } from "styled-components";

export const DotWrapper = styled.div` 

    height: 10px;
    width: 10px;
    background-color: white;
    border-radius: 9999px;
    z-index: 0;

    ${(props) =>
    props.Selected &&
    css`
        height: 10px;
        width: 10px;
        background-color: #6FC16D;
   `}
`;