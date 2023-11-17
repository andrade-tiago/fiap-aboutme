import formacao from "../contents/formacao"
import Card from "../components/Card/Card"
import CardsGrid from '../components/CardsGrid/CardsGrid'
import ContentContainer from "../components/ContentContainer/ContentContainer"

function Formacao() {
  return (
      <ContentContainer>
        <h2>Formação</h2>

        <h3>Principais</h3>
        <CardsGrid>
          {formacao["Principais"].map(item => (
            <Card titulo={item.nome} strong={item.escola} desc={item.desc} status={item.status} />
          ))}
        </CardsGrid>

        <h3>Complementares</h3>
        <CardsGrid>
          {formacao["Complementares"].map(item => (
            <Card titulo={item.nome} strong={item.escola} desc={item.desc} status={item.status} />
          ))}</CardsGrid>
      </ContentContainer>
  )
}

export default Formacao
