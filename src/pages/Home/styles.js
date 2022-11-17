import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: #e81825;
`;

export const ContainerDetails = styled.View`
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Block = styled.View`
  width: 150px;
  height: 150px;
  align-items: center;
  justify-content: center;
  background-color: #ffcb05;
  border-radius: 32px;
  padding: 16px;
  margin: 16px;
`;

export const Divider = styled.View`
  height: 32px;
`;

export const ImagePokemonTittle = styled.Image`
  width: 300px;
  height: 100px;
`;

export const ContainerSearchBar = styled.View`
  flex-direction: row;
`;

export const SearchBar = styled.TextInput`
  width: 70%;
  height: 50px;
  background-color: #ffcb05;
  border-radius: 16px;
  padding: 8px;
  margin-horizontal: 4px;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 20%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #ffcb05;
  border-radius: 16px;
`;

export const ImagePokemon = styled.Image`
  width: 150px;
  height: 150px;
`;