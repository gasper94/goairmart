// Styles
import {
    MobileMenuWrapper,
    MobileMenuSub,
    SingleOption,
    NavigationButton,
    SelectedItem
} from "./styles";

// Assests
import {HomeIcon} from '../../../../assets/home_icon';
import {OrdersIcon} from '../../../../assets/orders_icon';
import {AccountIcon} from '../../../../assets/account_icon';

// Hooks

// Components

function MobileMenu(props) {

    return (
    <MobileMenuWrapper>
        <MobileMenuSub>
            <SingleOption>
                <NavigationButton>
                    <HomeIcon/>
                    <SelectedItem Selected={true}>Home</SelectedItem>
                </NavigationButton>
            </SingleOption>
            <SingleOption>
                <NavigationButton>
                    <OrdersIcon />
                    <SelectedItem>Orders</SelectedItem>
                </NavigationButton>
            </SingleOption>
            <SingleOption>
                <NavigationButton>
                    <AccountIcon />
                    <SelectedItem>Name</SelectedItem>
                </NavigationButton>
            </SingleOption>
       </MobileMenuSub>
    </MobileMenuWrapper>
    );
}


export default MobileMenu;




