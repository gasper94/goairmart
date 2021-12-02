// Styles
import {
    DotWrapper
} from "./styles";

// Assets

// Components

function Dot(props) {
    return (
       <DotWrapper Selected={props.currentIndex === props.item ? true : false}/>
    );
}

export default Dot;
