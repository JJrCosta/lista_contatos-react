import styled from 'styled-components'

// export const ContactContainer = styled.main``

export const ContactBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  border-top: 3px solid #d9d9d9;
  padding-top: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ContactTag = styled.span`
  font-size: 32px;
  color: #d9d9d9;
  padding: 8px;
`
export const ContactSection = styled.div`
  margin-top: 32px;
`

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
