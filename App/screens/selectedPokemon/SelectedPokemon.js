import React from 'react';
import {View, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {usePokemon} from '../../hooks/UsePokemon';
import {globalStyles} from '../../style/globalStyles';
import TextContent from './components/TextContent';

const SelectedPokemon = ({route}) => {
  const {id, picture} = route.params;
  const {isLoading, pokemon} = usePokemon(id);

  return (
    <View style={[globalStyles.container, styles.selected]}>
      <View style={styles.card}>
        <Image
          source={{uri: picture}}
          style={{
            width: '100%',
            height: 200,
          }}
          resizeMode="contain"
        />
      </View>
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator color="grey" size={20} />
        </View>
      ) : (
        <TextContent pokemon={pokemon} />
      )}
    </View>
  );
};

export default SelectedPokemon;

const styles = StyleSheet.create({
  selected: {
    backgroundColor: '#141B22',
  },
  card: {
    width: '100%',
    height: 200,
    backgroundColor: '#141B22',
    borderRadius: 15,
    marginBottom: 20,
    alignSelf: 'center',
  },

  name: {
    fontSize: 25,
    color: '#0C0C0C',
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
