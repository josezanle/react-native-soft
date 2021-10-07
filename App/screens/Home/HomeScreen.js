import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import {usePokemonPaginated} from '../../hooks/UsePokemonPaginated';
import {globalStyles} from '../../style/globalStyles';
import Card from './components/Card';
import Header from './components/Header';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const widthX = width;

  const {simplePokemonList, loadPokemons} = usePokemonPaginated();

  return (
    <View style={globalStyles.container}>
      <FlatList
        contentContainerStyle={{
          backgroundColor: '#1C282D',
        }}
        ListHeaderComponent={<Header />}
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        // infinite Scroll
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={20} color="grey" />
        }
        renderItem={({item, index}) => {
          return (
            <Pressable
              onPress={() => navigation.navigate('SelectedPokemon', item)}>
              <Card item={item} />
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
