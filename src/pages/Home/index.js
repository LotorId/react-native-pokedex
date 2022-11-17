import React, { useState } from 'react';
import { Text, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Block, Container, ContainerDetails, ContainerSearchBar, Divider, ImagePokemon, ImagePokemonTittle, SearchBar, SearchButton } from './styles';
import { FontBody, FontTittle } from '../../assets/fonts/styles';

const Home = () => {

  const [pokemon, setPokemon] = useState('')
  const [data, setData] = useState()
  const [types, setTypes] = useState([])


  async function Search() {
    let req = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
    let res = await req.json()
    setData(res)
    setTypes(res.types)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container style={{ paddingTop: StatusBar.currentHeight }}>

        <ImagePokemonTittle source={require('../../assets/images/pokemon.png')} resizeMode="contain" />

        <Divider />

        <ContainerSearchBar>
          <SearchBar
            value={pokemon}
            onChangeText={(pokemon) => setPokemon(pokemon.toLowerCase())}
          />
          <SearchButton onPress={() => Search()}>
            <Text>Buscar</Text>
          </SearchButton>
        </ContainerSearchBar>

        <Divider />

        {data && (
          <ContainerDetails>
            <Block>
              <ImagePokemon source={{ uri: data.sprites.front_default }} resizeMode="contain" />
            </Block>

            <Block>
              <FontTittle>Nome</FontTittle>
              <FontBody>{data.name}</FontBody>
            </Block>

            <Block>
              <FontTittle>Peso</FontTittle>
              <FontBody>{(data.weight / 2.202).toFixed(2)} kg</FontBody>
            </Block>

            <Block>
              <FontTittle>Altura</FontTittle>
              <FontBody>{data.height * 10} cm</FontBody>
            </Block>

            <Block>
              <FontTittle>Tipo</FontTittle>
              {types.map((item, index) => {
                return (<FontBody key={index}>{item.type.name}</FontBody>)
              })}
            </Block>
          </ContainerDetails>
        )}
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default Home;