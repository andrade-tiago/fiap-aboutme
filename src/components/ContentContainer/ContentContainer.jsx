import { Box } from "reflexbox"
import { Fonts } from "../../shared/DesignTokens"

function ContentContainer({children}) {
    return (
        <Box width={1} maxWidth={1000} mx="auto" px={20} py={50} fontSize={16}>
            {children}
        </Box>
    )
}

export default ContentContainer