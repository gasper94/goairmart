import styled, { css } from "styled-components";

// Structure
export const MobileMenuWrapper = styled.div`
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
`;


export const MobileMenuSub = styled.div`
    display: none; 
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;

    width: 300px;
    height: auto;

    border-left-width: 0px;
    border-right-width: 0px;
    border-top-width: 0.15rem;
    border-bottom-width: 0px;
    border-style: solid;
    border-color: #EDEEF1;

    background-color: #ffff;

    @media screen and (max-width: 1200px) {
        display: flex;
        height: 48px;
        width: auto;
    }
`;

// Components
export const SingleOption = styled.div`
  flex: 1 1 0%;
  display: flex;
  justify-content: center;
`;

export const NavigationButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #ffff;
`;

export const SelectedItem = styled.div`
  font-family: Open Sans;
  font-style: normal;
 
  color: #767676;

  ${(props) =>
   props.Selected &&
   css`
      color: #424242;
   `}
`;

