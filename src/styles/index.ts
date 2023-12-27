import styled, { createGlobalStyle } from 'styled-components'

const GlobalReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    list-style: none;
  }

  body {
    background-color: #222;
    overflow-y: scroll;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export default GlobalReset
