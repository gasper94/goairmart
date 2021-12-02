import styled from "styled-components";

export const CardWrapper = styled.div` 
    -webkit-tap-highlight-color: transparent;
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

export const Carousel = styled.div` 

    display: flex;
    background-color: red;
    width: 90%;
    position: relative;
    justify-content: center;
`;



export const CarouselImage = styled.img` 
    flex: 1 1 0%;
    background-color: red;
    width: 100%;
    height: 207px;
    object-fit: cover;
`;

export const CardDetails = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 90%;
    height: 227px;
    gap: 12px;
    margin-top: 12px;
`;

export const CardTitle = styled.div` 
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    color: #424242;
`;

export const CardExpiration = styled.div` 
    display: flex;
    flex-direction: row;
    gap: 15px;

    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    color: #424242;

`;

export const CardOwnerDetail = styled.div` 
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;

    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #424242;
`;

export const OnwerImage = styled.img`
    width: 35px;
    height: 35px;
    object-fit: fill;
    border-radius: 21px;
`;