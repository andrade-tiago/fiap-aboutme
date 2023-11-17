import styled from "styled-components"
import { Colors } from "../../shared/DesignTokens"
import { Flex } from "reflexbox"

export const Wrapper = styled(Flex).attrs({
    p: 20,
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center'
})`
    border: 1px solid ${Colors.LIGHT_GRAY};
    border-radius: 5px;
    gap: 8px;

    /*h3 {
        font-size: 20px;
    }*/

    .gold {
        color: ${Colors.GOLD}
    }

    .blue {
        color: ${Colors.BLUE};
        letter-spacing: 3px
    }
`

function Card({titulo, strong, desc, status}) {
    return (
        <Wrapper>
            <h4>{titulo}</h4>
            <p>{desc}</p>
            <p className="gold">{strong}</p>
            <p className="blue">{"<"}{status}{" />"}</p>
        </Wrapper>
    )
}

export default Card