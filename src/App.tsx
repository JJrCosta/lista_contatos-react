import CardContainer from './containers/CardContainer'
import ContactContainer from './containers/ContactContainer'
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
          <ContactContainer />
        </Main>
      </Container>
    </>
  )
}

export default App
