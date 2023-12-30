import CardContainer from './containers/CardContainer'
import ContactContainer from './containers/ContactContainer'
import { ContactWrapper } from './containers/ContactContainer/styles'
import Header from './containers/Header'
import GlobalReset, { Container, Main } from './styles'

function App() {
  return (
    <>
      <GlobalReset />
      <Header />
      <Container>
        <Main>
          <CardContainer />
          <ContactWrapper>
            <ContactContainer />
            <ContactContainer />
          </ContactWrapper>
        </Main>
      </Container>
    </>
  )
}

export default App
