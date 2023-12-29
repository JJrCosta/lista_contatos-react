import styled from 'styled-components'

export const ContactContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 8px;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`
