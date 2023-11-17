import { Colors, Fonts } from "../../shared/DesignTokens";
import styled from "styled-components";

const Wrapper = styled.footer`
    background: ${Colors.BASE_GRAY};
    padding: 40px;
    text-align: center;
    font-family: ${Fonts.SS};
    letter-spacing: 1px;
    font-size: 14px
`

function Footer() {
    return (
        <Wrapper>
            <p>Tiago Andrade &copy; {new Date().getFullYear()}</p>
        </Wrapper>
    )
}

export default Footer