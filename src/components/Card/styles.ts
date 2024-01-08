import styled from 'styled-components'

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #617fad;
  width: 320px;
  height: 300px;
  margin-top: 100px;
  margin-bottom: 32px;
  border-radius: 5px;
  padding: 22px;
`

export const CardImg = styled.img`
  background-color: #ccc;
  height: 150px;
  width: 150px;
  margin-top: -100px;
  border-radius: 50%;
`

export const CardTitulo = styled.span`
  font-size: 24px;
  color: #fff;
  margin-top: 8px;
  margin-bottom: 16px;
`

export const Tag = styled.span`
  background-color: #678550;
  border: 1px solid #fff;
  border-radius: 15px;
  padding: 4px 8px;
  color: #fff;
  font-size: 14px;
  align-self: start;
  margin-bottom: 32px;
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: start;
  margin-top: 16px;
`

export const PhoneIcon = styled.img`
  background-color: #ccc;
  border-radius: 50%;
  height: 30px;
  width: 30px;
`

export const PhoneLink = styled.a`
  color: #ccc;
  font-size: 18px;
  margin-left: 8px;
  cursor: pointer;
`

export const MailIcon = styled.img`
  background-color: #ccc;
  border-radius: 50%;
  height: 30px;
  width: 30px;
`

export const MailLink = styled.a`
  color: #ccc;
  font-size: 18px;
  margin-left: 8px;
  cursor: pointer;
`
