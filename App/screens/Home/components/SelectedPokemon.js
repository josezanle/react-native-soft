import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {pokemonApi} from '../../../api/pokemonApi';
import {globalStyles} from '../../../style/globalStyles';

const SelectedPokemon = ({route}) => {
  const {id, picture, name} = route.params;
  const [pokeDescription, setPokeDescription] = useState([]);
  console.log(JSON.stringify(route, null, 3));

  const getPokemonDescription = async () => {
    const url = `https://pokeapi.co/api/v2/ability/${id}`;

    try {
      const res = await pokemonApi.get(url);
      console.log(JSON.stringify(res, null, 3));
      // setPokeDescription()
    } catch (error) {
      console.log(object);
    }
  };

  useEffect(() => {
    getPokemonDescription();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text>pokemon selected</Text>
    </View>
  );
};

export default SelectedPokemon;
