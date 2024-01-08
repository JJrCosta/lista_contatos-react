import * as S from './styles'

// type CardInfo = {
//   name: string
//   phone: string
//   mail: string
//   avatar: string
// }

const Card = () => (
  <S.CardContent>
    <S.CardImg />
    <S.CardTitulo>Nome Completo</S.CardTitulo>
    <S.Tag>Institucional</S.Tag>
    <S.LinkWrapper>
      <S.PhoneIcon />
      <S.PhoneLink>99 999999 9999</S.PhoneLink>
    </S.LinkWrapper>
    <S.LinkWrapper>
      <S.PhoneIcon />
      <S.MailLink>exemplo@teste.com</S.MailLink>
    </S.LinkWrapper>
  </S.CardContent>
)

export default Card
