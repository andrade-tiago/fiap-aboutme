import styled from "styled-components"
import { Box } from "reflexbox"

const Wrapper = styled(Box)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`

function CardsGrid({children}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default CardsGrid