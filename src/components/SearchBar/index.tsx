import * as S from './styled'

const SearchBar = () => {
  return (
    <S.SearchBarBox>
      <S.SearchBarInput placeholder="Buscar..." />
      <S.SearchBarButton>Buscar</S.SearchBarButton>
    </S.SearchBarBox>
  )
}

export default SearchBar
