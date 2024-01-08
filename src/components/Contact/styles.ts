import styled from 'styled-components'
import { Props } from '.'

export const Contact = styled.div<Props>`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.active ? '#617FAD' : '#536176')};
  padding: 16px;
  height: 100px;
  min-width: 320px;
  cursor: pointer;
`

export const ContactImg = styled.div`
  background-color: #ccc;
  height: 65px;
  width: 65px;
  border-radius: 50%;
  margin-right: 16px;
`

export const ContactName = styled.p`
  color: #fff;
  font-size: 18px;
`
