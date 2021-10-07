import React from 'react';
import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';

const Card = ({item}) => {
  const {width} = useWindowDimensions();
  const widthX = width;
  const {id, picture, name} = item;
  return (
    <View style={styles.card}>
      <View style={styles.imageBox}>
        <Image
          source={{uri: picture}}
          style={{
            width: '100%',
            height: 200,
          }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textBox}>
        <Text style={styles.name}>{name}</Text>
        <Image
          source={require('../../../../Assets/icons/arrow.png')}
          resizeMode="contain"
        />
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
  },
  imageBox: {
    flex: 7,
  },
  textBox: {
    flex: 3,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 25,
    color: '#0C0C0C',
  },
});
