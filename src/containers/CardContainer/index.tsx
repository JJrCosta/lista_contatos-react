import { useState } from 'react'
import Card from '../../components/Card'
import CardContainerMsg from '../../components/CardContainerMsg'
import FormNew from '../../components/FormNew'
import * as S from './styles'

const CardContainer = () => {
  const [adicionandoContato, setAdicionandoContato] = useState(false)
  return (
    <S.CardContainer>
      <CardContainerMsg />
      <Card />
      <FormNew />
    </S.CardContainer>
  )
}

export default CardContainer
