import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

const TextContent = ({pokemon}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: 'white',
        borderRadius: 15,
        paddingHorizontal: 15,
      }}>
      <View
        style={{
          ...styles.container,
        }}>
        <Text style={styles.title}>Type:</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text
              style={{
                ...styles.regularText,
                marginRight: 10,
              }}
              key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>

        <Text style={styles.title}>weight</Text>
        <Text style={styles.regularText}>{pokemon.weight}kg</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Sprites</Text>
      </View>

      <ScrollView
        // style
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <Image
          source={{uri: pokemon.sprites.front_default}}
          style={styles.basicSprite}
        />

        <Image
          source={{uri: pokemon.sprites.back_default}}
          style={styles.basicSprite}
        />

        <Image
          source={{uri: pokemon.sprites.front_shiny}}
          style={styles.basicSprite}
        />

        <Image
          source={{uri: pokemon.sprites.back_shiny}}
          style={styles.basicSprite}
        />
      </ScrollView>

      {/* Habilidades */}
      <View style={styles.container}>
        <Text style={styles.title}>abilities</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text
              style={{
                ...styles.regularText,
                marginRight: 10,
              }}
              key={ability.name}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>

      {/* Habilidades */}
      <View style={styles.container}>
        <Text style={styles.title}>Movements</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {pokemon.moves.map(({move}) => (
            <Text
              style={{
                ...styles.regularText,
                marginRight: 10,
              }}
              key={move.name}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>

      {/* Stats */}
      <View style={styles.container}>
        <Text style={styles.title}>Stats</Text>
        <View>
          {pokemon.stats.map((stat, i) => (
            <View key={stat.stat.name + i} style={{flexDirection: 'row'}}>
              <Text
                style={{
                  ...styles.regularText,
                  marginRight: 10,
                  width: 150,
                }}
                key={stat.stat.name}>
                {stat.stat.name}
              </Text>

              <Text
                style={{
                  ...styles.regularText,
                  fontWeight: 'bold',
                }}>
                {stat.base_stat}
              </Text>
            </View>
          ))}
        </View>

        {/* Sprite final */}
        <View
          style={{
            marginBottom: 20,
            alignItems: 'center',
          }}>
          <Image
            uri={pokemon.sprites.front_default}
            style={styles.basicSprite}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 19,
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});

export default TextContent;
