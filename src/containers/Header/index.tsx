import SearchBar from '../../components/SearchBar'
import { Container } from '../../styles'
import { Head, AlignContainer, Logo, Title, BtnAddNew } from './styles'

const Header = () => {
  return (
    <Head>
      <Container>
        <AlignContainer>
          <AlignContainer>
            <Logo />
            <Title>contatos</Title>
          </AlignContainer>
          <SearchBar />
          <BtnAddNew>+ Novo</BtnAddNew>
        </AlignContainer>
      </Container>
    </Head>
  )
}

export default Header
