import * as S from './styles'

const Card = () => {
  return (
    <S.Card>
      <S.CardImg />
      <div>
        <S.CardName>Nome Teste</S.CardName>
        <S.CardLink href="mailto:">teste@teste</S.CardLink>
        <S.CardLink href="tel:+">99 99999 9999</S.CardLink>
      </div>
      <S.CardToggle>V</S.CardToggle>
    </S.Card>
  )
}

export default Card
