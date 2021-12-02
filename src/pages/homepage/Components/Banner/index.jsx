import { useState } from 'react';

// Styles
import {
    BannerWrapper,
    BannerItem,
    Image,
    Previous,
    Next,
    Dots
} from "./styles";

// Assets
import { PreviousIcon } from '../../../../assets/previous_icon';
import { NextIcon } from '../../../../assets/next_icon';

// Components
import Dot from "./components/Dot/index";


function Banner(props) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const NextImage = () => {
        if(currentIndex === props.banner.length-1){
            setCurrentIndex(0);
        }else{
            let currentIndexNow = currentIndex + 1;

            setCurrentIndex(currentIndexNow);
        }
    }

    const PrevImage = () => {
        if(currentIndex === 0){
            setCurrentIndex(props.banner.length-1);
        }else{
            let currentIndexNow = currentIndex - 1;

            setCurrentIndex(currentIndexNow);
        }
    }
    
    return (
        <BannerWrapper>    
            <BannerItem>
                {props.banner ? 
                    <>
                        <Image src={props.banner[currentIndex]} />
                    </>
                : 
                    <>NO</>
                }

                <Previous onClick={PrevImage}>
                    <PreviousIcon />
                </Previous>

                <Next onClick={NextImage}>
                    <NextIcon />
                </Next>

                {props.banner ? 
                    <Dots>
                        {props.banner.map((item, index) => (
                            <Dot key={index} item={index} currentIndex={currentIndex}/>
                        ))}
                    </Dots>
                :null}
            </BannerItem>
        </BannerWrapper>
    );
}

export default Banner;

