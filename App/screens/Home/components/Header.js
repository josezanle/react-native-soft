import React from 'react';
import {Image, StyleSheet, useWindowDimensions, View} from 'react-native';

const Header = () => {
  const {width} = useWindowDimensions();
  const widthX = width;

  return (
    <View style={styles.center}>
      <Image
        source={require('../../../../Assets/images/pokemon.png')}
        resizeMode="cover"
        style={{
          width: widthX,
          height: 200,
        }}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  center: {
    backgroundColor: '#223238',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
