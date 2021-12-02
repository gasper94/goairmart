// Styles
import {
    NavigationBarWrapper, 
    ThreeDivisionNavigation, 
    MultipleItems, 
    SingleItems,
    BrowserDimension,
    Zipcode,
    ZipcodeNumber
} from "./styles";

// Assests
import {LogoIcon} from '../../../../assets/logo_icon';
import { DropdownIcon } from '../../../../assets/dropdown_icon';
import { SearchIcon } from '../../../../assets/search_icon';

// Hooks
import useWindowDimensions from '../../../../hooks/ScreenDimension';

// Components
import DropDown from '../Dropdown/index.jsx';

function NavigationBar(props) {

    const { width } = useWindowDimensions();

    return (
        <NavigationBarWrapper>
            <ThreeDivisionNavigation>
                {/* Left */}
                <MultipleItems>
                    <LogoIcon />
                    <BrowserDimension>{width}</BrowserDimension>
                </MultipleItems>

                {/* Center */}
                <MultipleItems>
                    <Zipcode>Zipcode:</Zipcode>
                    <ZipcodeNumber>94066</ZipcodeNumber>
                    <DropdownIcon/>
                </MultipleItems>

                {/* Right */}
                <SingleItems>
                    <SearchIcon />
                    <DropDown
                        options={["Home","Orders", "Name"]}
                        defaultText={`User's Name`}
                        changeOptionName={() => console.log("Trimester")}
                    />
                </SingleItems>
            </ThreeDivisionNavigation>
        </NavigationBarWrapper>
    );
}


export default NavigationBar;





