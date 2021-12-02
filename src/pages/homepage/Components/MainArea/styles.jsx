import styled from "styled-components";

// Structure
export const MainArea = styled.div` 
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const ContainerArea = styled.div` 
    height: 100%;
    width: 100%;

    background-color: #ffff;

    @media screen and (min-width: 1682px) {
        max-width: 1682px;
    }
`;

export const MainAreaGrid = styled.div`
    flex: 1 1 0%;
    display: flex;
    justify-content: center;
`;

export const MainContentSpace = styled.div`
  flex: 1 1 0%;
  width: 300px;
  background-color: #FFFFFF;
  /* overflow-y: hidden; */
  min-height: 1366px;
`;

// Components
export const CardGhost = styled.div` 
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 32px;
    gap: 4px;

    /* Frame 193 */
    width: 380px;
    height: 350px;
    background: #FFFFFF;
    cursor: pointer;
    padding-top: 20px;

    /* Card and Page Shadow */
    box-shadow: 0px 4px 20px 4px rgba(0, 49, 107, 0.15);
    border-radius: 15px;

    overflow: hidden;

    &:hover { 
        // do
    } 

`;

export const ButtonSectionSelected = styled.div` 
  
  min-width: 89px;
  max-width: auto;
  height: 40px;
  padding-right: 12px;
  padding-left: 12px;
  padding-top: 8px;
  padding-bottom: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  /* Text */
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */


  color: #767676;

  background: #FFFFFF;
  border: 1px solid #ECECEC;
  box-sizing: border-box;
  border-radius: 21px;
  
`;

export const ButtonSection = styled.div` 
  background-color: #6FC16D;
  min-width: 18px;
  max-width: auto;
  height: 25px;
  border-radius: 21px;
  padding-right: 12px;
  padding-left: 12px;
  padding-top: 8px;
  padding-bottom: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  /* Text */
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */
  text-align: center;

  color: #FFFFFF;
  
`;

export const Stores = styled.div` 
  display: flex;
  margin: 10px;
  gap: 40px;
  flex-wrap: wrap;
  /* margin-left: 20px; */
  /* align-items: center;*/
  justify-content: center; 
  
  width: auto;
  height: auto;
  /* background-color: red; */
`;

export const Categories = styled.div` 
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 4px;
  padding: 10px;
  margin-left: 10px;

  
  width: auto;
  min-height: 50px;
  /* background-color: red; */
`;
