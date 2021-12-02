// Styles
import {
    MainArea,
    ContainerArea,
    MainAreaGrid,
    MainContentSpace,
    Categories,
    ButtonSection,
    ButtonSectionSelected,
    Stores,
    // CardGhost
} from "./styles";

// Assests

// Hooks

// Components
import Banner from "../Banner/index";
import Card from "./components/Card/index";

function MainContent({banner, groups}) {

    return (
        <MainArea>
            <ContainerArea>
                <MainAreaGrid>
                    <MainContentSpace>
                        <Banner banner={banner}/>

                        <Categories>
                            <ButtonSection>All</ButtonSection>
                            {[1,2,3,4,5,7,8].map((item, key) => (
                                <ButtonSectionSelected>Category {key+1}</ButtonSectionSelected>
                            ))}
                        </Categories>

                        <Stores>
                            {groups ? 
                                <>
                                {groups.map((item) => (
                                    <Card item={item} />
                                ))}
                                </>
                            : 
                                <>Loading...</>
                            }

                            {groups ? 
                                <>
                                {groups.map((item) => (
                                    <Card item={item} />
                                ))}
                                </>
                            : 
                                <>Loading...</>
                            } 

                            {groups ? 
                                <>
                                {groups.map((item) => (
                                    <Card item={item} />
                                ))}
                                </>
                            : 
                                <>Loading...</>
                            }     

                            {/* {[1,2,3,4,5,7,8].map((item, key) => (
                                <CardGhost>hey</CardGhost>
                            ))} */}
                        </Stores>
                    </MainContentSpace>
                </MainAreaGrid>
            </ContainerArea>
        </MainArea>
    );
}

export default MainContent;









