import React from "react";
import axios from "axios";
import ContentContainer from "../components/ContentContainer/ContentContainer"
import styled from "styled-components";
import { Colors } from "../shared/DesignTokens";
import { Flex } from "reflexbox";

const CEP = '07957020'
const getCepDataUrl = `https://viacep.com.br/ws/${CEP}/json/`

const Code = styled.pre`
  margin: 20px 0;
  padding: 10px;
  background: ${Colors.BASE_GRAY};
  border-radius: 5px;
  animation: brotar 1s;
  transform: perspective(1000px) rotateY(0deg) rotateX(0);
  overflow-x: auto;

  @keyframes brotar {
    0% {
      transform: perspective(1000px) rotateY(90deg) rotateX(90deg);
    }
    100% {
      transform: perspective(1000px) rotateY(0deg) rotateX(0);
    }
  }
`

const Text = styled.p`
  margin: 20px 0;
  text-align: center
`

const Button = styled.button`
  padding: 15px;
  background: ${Colors.GOLD};
  border: 2px solid ${Colors.WHITE};
  border-radius: 5px;
  color: ${Colors.BASE_GRAY};
  cursor: pointer;

  &:focus {
    outline: 1px dashed ${Colors.DARK_GRAY}
  }
`

function Home() {
  const [cepData, setCepData] = React.useState("{}");
  const [mostrarEndereco, setMostrarEndereco] = React.useState(false);

  React.useEffect(() => {
    axios.get(getCepDataUrl).then((response) => {
      setCepData(
        JSON.stringify(response.data)
        .replace("{", "{\n\t")
        .replace(/,/g, ",\n\t")
        .replace("}", "\n}")
        .replace(/:/g, ": ")
      )
    });
  }, []);

  function handleClick() {
    setMostrarEndereco(!mostrarEndereco);
  }

  return (
    <ContentContainer>
      <Text>
        Tenho 19 anos, sou apaixonado por tecnologia e... que tal um café? :D
      </Text>
      <Text>
        Você pode me convidar no CEP: {CEP} 
      </Text>
      {
        !mostrarEndereco && (
          <Flex justifyContent="center">
            <Button onClick={handleClick}>Obter detalhes do ViaCEP</Button>
          </Flex>
        )
      }
      {
        mostrarEndereco && (<Code>{cepData}</Code>)
      }
    </ContentContainer>
  )
}

export default Home
