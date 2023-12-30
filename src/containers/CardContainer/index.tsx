import Card from '../../components/Card'
import CardContainerMsg from '../../components/CardContainerMsg'
import * as S from './styles'

const CardContainer = () => {
  return (
    <S.CardContainer>
      <CardContainerMsg />
      <Card />
    </S.CardContainer>
  )
}

export default CardContainer
