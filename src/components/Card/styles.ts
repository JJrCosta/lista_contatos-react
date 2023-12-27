import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #536176;
  border-radius: 5px;
  padding: 16px;
`

export const CardImg = styled.div`
  background-color: #ccc;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin-right: 16px;
`

export const CardName = styled.p`
  color: #fff;
  font-size: 18px;
  margin-bottom: 16px;
`

export const CardLink = styled.a`
  display: block;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 8px;
  margin-left: 8px;
`

export const CardToggle = styled.button`
  position: absolute;
  right: 16px;
  color: #444;
  background-color: #ccc;
  align-self: start;
  margin-top: 8px;
  justify-content: flex-end;
  padding: 4px;
  border: none;
  cursor: pointer;
  font-weight: bold;
`
