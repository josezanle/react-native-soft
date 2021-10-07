import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Card = ({item}) => {
  const {id, picture, name} = item;
  return (
    <View style={styles.card}>
      <Image
        source={{uri: picture}}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.textBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.name}>#{id}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 300,
    backgroundColor: '#141B22',
    borderRadius: 15,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
  image: {
    width: 250,
    height: 350,
    position: 'absolute',
    right: -40,
  },
  textBox: {
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});
