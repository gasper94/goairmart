
import styled from "styled-components";

// Structure
export const NavigationBarWrapper = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    left: 0px;
    right: 0px;

    border-left-width: 0px;
    border-right-width: 0px;
    border-top-width: 0px;
    border-bottom-width: 0.15rem;
    border-style: solid;
    border-color: #EDEEF1;

    min-height: auto;
    z-index: 50;
    background-color: white;
`;

export const ThreeDivisionNavigation = styled.div`
    display: flex;
    padding-left: 10px;
    padding-right: 10px;

    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MultipleItems = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 8px;
    width: auto;
`;

export const SingleItems = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 100%;
`;

// Internal Components
export const BrowserDimension = styled.div` 
    /* position: absolute;
    top: 50px;
    left: 50px;
    z-index: 50; */
    color: gray;
    font-weight: 700;

    @media screen and (max-width: 500px) {
      display: none;
    }
`;

export const Zipcode = styled.div`

  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #BFBFBF;

`;

export const ZipcodeNumber = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #6FC16D;
`;




