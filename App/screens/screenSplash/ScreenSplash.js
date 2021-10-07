import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Image, StyleSheet, useWindowDimensions, View} from 'react-native';
import {globalStyles} from '../../style/globalStyles';

const ScreenSplash = () => {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();

  const widthX = width;
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={[globalStyles.container, styles.center]}>
      <Image
        source={require('../../../Assets/images/pokemon.png')}
        resizeMode="cover"
        style={{
          width: widthX,
          height: 200,
        }}
      />
    </View>
  );
};

export default ScreenSplash;

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#223238',
  },
});
