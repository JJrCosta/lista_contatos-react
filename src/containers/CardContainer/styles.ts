import styled from 'styled-components'

export const CardContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 130px;
  grid-gap: 10px;
  height: calc(100vh - 70px);
  background-color: #263743;
  padding: 16px;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`
