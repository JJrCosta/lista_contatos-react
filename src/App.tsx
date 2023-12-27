import CardContainer from './containers/CardContainer'
import Header from './containers/Header'
import GlobalReset, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalReset />
      <Header />
      <Container>
        <CardContainer />
      </Container>
    </>
  )
}

export default App
