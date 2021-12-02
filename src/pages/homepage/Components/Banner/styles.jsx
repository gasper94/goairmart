import styled from "styled-components";

// Structure
export const BannerWrapper = styled.div` 
  display: flex;
  /* margin-top: 10px; */
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 10px;

  align-items: center;
  justify-content: center;
  
  width: auto;
  height: auto;

 
  /* background-color: red; */
`;

export const BannerItem = styled.div`
    /* min-width: 350px; */
    position: relative;
    display: flex;

    justify-content: center;
    max-width: 1618px;
    height: auto;
    /* background-color: blue; */
    @media screen and (max-width: 1200px) {
    flex-direction: column;

    }
`;

// Components

export const Next = styled.button` 

  position: absolute;
  top: 45%;
  right: 0px;
  background-color: transparent;
  color: transparent;
  /* z-index: 50; */
  border: none;

  height: 60px;
  width: 60px;

  @media screen and (max-width: 700px) {
    top: 38%;
    right: -10px;
  }

  @media screen and (max-width: 500px) {
        display: none;

    }

  &:hover { 
        cursor: pointer;
    } 
`;

export const Previous = styled.button` 
  
    position: absolute;
    top: 45%;
    left: 0px;
    background-color: transparent;
    color: transparent;
    /* z-index: 50; */
    border: none;

    height: 60px;
    width: 60px;

    @media screen and (max-width: 700px) {
        top: 38%;
        left: -10px;
    
    }


   @media screen and (max-width: 500px) {
        display: none;

    }
  
    &:hover { 
            cursor: pointer;
        } 
`;

export const Image = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 0px;
  /* z-index: 0; */

  @media screen and (max-width: 1200px) {
    margin-top: 10px;
    border-radius: 15px;
  }
`;

export const Dots = styled.div` 
    display: flex;
    flex-direction: row;
    gap: 8px;
    position: absolute;
    bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    justify-content: center;
    padding: 4px;

    color: white;
    z-index: 40;

    height: auto;
    width: auto;

    &:hover { 
        cursor: pointer;
    } 
    background-color: transparent;

    @media screen and (max-width: 500px) {
        /* top: 38%;
        right: -10px; */
        bottom: 10px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        justify-content: center;

    }

`;