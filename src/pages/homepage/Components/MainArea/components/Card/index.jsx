import moment from 'moment';
import styled from "styled-components";
import { useState } from 'react';

// Styles
import {
    CardWrapper,
    Carousel,
    CarouselImage,
    CardDetails,
    CardTitle,
    CardExpiration,
    CardOwnerDetail,
    OnwerImage
} from "./styles";

// Assests
import { ExpirationIcon } from "../../../../../../assets/expiration_icon";
import { UserIcon } from "../../../../../../assets/user_icon";
import { PreviousIcon } from '../../../../../../assets/previous_icon';
import { NextIcon } from '../../../../../../assets/next_icon';

// Hooks

// Components
import Dot from "../../../Banner/components/Dot/index";

function Card({item}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const NextImage = () => {
        if(currentIndex === item.images.length-1){
            setCurrentIndex(0);
        }else{
            let currentIndexNow = currentIndex + 1;

            setCurrentIndex(currentIndexNow);
        }
    }

    const PrevImage = () => {
        if(currentIndex === 0){
            setCurrentIndex(item.images.length-1);
        }else{
            let currentIndexNow = currentIndex - 1;

            setCurrentIndex(currentIndexNow);
        }
    }
    

    return (
        <CardWrapper>
            <Carousel>
                    <CarouselImage src={item.images[currentIndex]} />
                    <Previous onClick={PrevImage}>
                        <PreviousIcon />
                    </Previous>
                    <Next onClick={NextImage}>
                        <NextIcon />
                    </Next>
                    {item.images ? 
                        <Dots>
                            {item.images.map((item, index) => (
                                <Dot key={index} item={index} currentIndex={currentIndex}/>
                            ))}
                        </Dots>
                    :null}
            </Carousel>
            <CardDetails>
                <CardTitle>{item.name}</CardTitle>
                <CardExpiration>
                    <ExpirationIcon />
                    <>Deadline: {moment(item.deadline).format('M/D/Y h:mm A')}</>
                </CardExpiration>
                <CardOwnerDetail>
                    {item.leader.image ? 
                    <OnwerImage src={item.leader.image} />
                    :
                    <UserIcon />
                    }
                    <>{item.leader.name}</>
                </CardOwnerDetail>
            </CardDetails>
        </CardWrapper>
    );
}

export default Card;


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

export const Previous = styled.button` 
  
    position: absolute;
    top: 0px;
    left: 0px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    background-color: transparent;
    color: transparent;
    /* z-index: 50; */
    border: none;

    height: 100%;
    width: 40px;

    /* background-color: green; */

    @media screen and (max-width: 700px) {
        top: 0px;
        left: 0px;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
    
    }

    &:hover { 
        cursor: pointer;
    } 
`;

export const Next = styled.button` 

    position: absolute;
    top: 0px;
    right: 0px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    background-color: transparent;
    color: transparent;
    /* z-index: 50; */
    border: none;

    height: 100%;
    width: 40px;

    /* background-color: green; */

    @media screen and (max-width: 700px) {
        top: 0px;
        right: 0px;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
    
    }
    &:hover { 
        cursor: pointer;
    } 
`;