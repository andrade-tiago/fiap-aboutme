import { createGlobalStyle } from "styled-components";
import { Colors, Fonts } from "./DesignTokens";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box
    }

    body {
        font-family: ${Fonts.MS};
        color: ${Colors.DARK_GRAY};
        font-size: 16px
    }

    h2 {
        margin-bottom: 20px
    }

    h3 {
        margin-top: 20px;
        margin-bottom: 10px
    }
`

export default GlobalStyle