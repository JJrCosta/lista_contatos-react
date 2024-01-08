import * as S from './styles'

const FormNew = () => {
  return (
    <S.NewForm>
      <S.TitleForm>Adicionar novo contato</S.TitleForm>
      <S.ImputForm placeholder="URL Foto" />
      <S.ImputForm placeholder="Nome" />
      <S.ImputForm placeholder="Telefone" />
      <S.ImputForm placeholder="E-mail" />
      <S.FormBtnCancela>Cancelar</S.FormBtnCancela>
      <S.FormBtn>Salvar</S.FormBtn>
    </S.NewForm>
  )
}

export default FormNew
