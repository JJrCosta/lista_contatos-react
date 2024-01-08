import * as S from './styles'

export type Props = {
  active?: boolean
}

const Contact = (props: Props) => (
  <S.Contact active={props.active}>
    <S.ContactImg />
    <S.ContactName>Nome Teste</S.ContactName>
  </S.Contact>
)

export default Contact
