import hobbies from "../contents/hobbies"
import Card from "../components/Card/Card"
import CardsGrid from '../components/CardsGrid/CardsGrid'
import ContentContainer from "../components/ContentContainer/ContentContainer"

function Hobbies() {
  return (
    <ContentContainer>
      <h2>Hobbies</h2>

      <CardsGrid>
        {hobbies.map(item => (
          <Card titulo={item.nome} desc={item.desc} />
        ))}
      </CardsGrid>
    </ContentContainer>
  )
}

export default Hobbies
