import { PageWrapper } from "./styles"

export const Page = (props) => {

    return  (
        <PageWrapper>
            {props.children}
        </PageWrapper>
    )
}
