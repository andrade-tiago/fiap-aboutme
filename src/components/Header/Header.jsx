import { Link } from "react-router-dom"
import styled from "styled-components"
import { Colors, Fonts } from "../../shared/DesignTokens"
import { Box, Flex } from "reflexbox"
import { MdWavingHand } from "react-icons/md"

const Wrapper = styled.header`
    background: ${Colors.BASE_GRAY};

    nav {
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: center;

        ul {
            display: flex;

            a {
                color: ${Colors.DARK_GRAY};
                padding: 10px;
                display: block;
                text-decoration: none;
                border: 1px solid transparent;
                border-radius: 5px;

                &:hover, &:focus {
                    color: ${Colors.RED};
                    border-color: ${Colors.LIGHT_GRAY};
                    outline: none
                } 
            }
        }
    }

    h1 {
        color: ${Colors.GOLD};
    }

    hr {
        border: 0;
        background: none;
        border-bottom: 1px solid ${Colors.LIGHT_GRAY}
    }
`

const Photo = styled(Box)`
    border: 10px solid ${Colors.BASE_GRAY};
    outline: 1px solid ${Colors.LIGHT_GRAY};
    width: 100%;
    max-width: 225px;
    aspect-ratio: 1/1;
    background-image: url(https://avatars.githubusercontent.com/u/106769328?v=4);
    background-repeat: no-repeat;
    background-size: cover;
	background-position: center;
    border-radius: 50%;
`

function Header() {
    return (
        <>
            <Wrapper>
                <nav>
                    <ul>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/formacao'}>Formação</Link>
                        <Link to={'/experiencia'}>Experiência</Link>
                        <Link to={'/hobbies'}>Hobbies</Link>
                    </ul>
                </nav>
                <Flex alignItems="center" flexDirection={["column", "row"]} py={80}>
                    <Flex flexDirection="column" alignItems="center" width={[1, 3/5]} my={40} order={[2, 1]}>
                        <Box fontSize={48} fontFamily={Fonts.SS}>
                            Olá!{" "}<MdWavingHand />
                        </Box>
                        <Box width={1} my={20}><hr /></Box>
                        <Flex alignItems="center">
                            <Box fontSize={46} mr={20} letterSpacing={2} color={Colors.GRAY}>SOU</Box>
                            <Box>
                                <h1>Tiago Andrade</h1>
                                <Box color={Colors.BLUE} letterSpacing={5} mt={10}>{"<"}WEB_DEVELOPER{" />"}</Box>
                            </Box>
                        </Flex>
                    </Flex>
                    <Photo order={[1, 2]} />
                </Flex>
            </Wrapper>
        </>
    )
}

export default Header