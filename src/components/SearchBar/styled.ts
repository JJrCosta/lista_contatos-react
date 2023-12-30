import styled from 'styled-components'

export const SearchBarBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d9d9d9;
  border-radius: 15px;
`

export const SearchBarInput = styled.input`
  color: #666666;
  margin-right: 8px;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 16px;
`

export const SearchBarButton = styled.button`
  padding: 8px;
  background-color: blue;
  border: none;
  outline: none;
  background-color: #536176;
  cursor: pointer;
  border-radius: 0 15px 15px 0;
  margin-right: -2px;
`
