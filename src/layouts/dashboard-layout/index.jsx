import { DashboardLayoutWrapper } from "./styles"

export const DashboardLayout = (props) => {

    return  (
        <DashboardLayoutWrapper>
            {props.children}
        </DashboardLayoutWrapper>
    )
}
