import Contact from '../../components/Contact'
import * as S from './styles'

const ContactContainer = () => {
  return (
    <S.ContactSection>
      <S.ContactTag>A</S.ContactTag>
      <S.ContactBlock>
        <Contact></Contact>
        <Contact></Contact>
      </S.ContactBlock>
    </S.ContactSection>
  )
}

export default ContactContainer
