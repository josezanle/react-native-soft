import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Home/HomeScreen';
import SelectedPokemon from '../Home/components/SelectedPokemon';
import ScreenSplash from '../screenSplash/ScreenSplash';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenSplash">
        <Stack.Screen
          name="ScreenSplash"
          component={ScreenSplash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SelectedPokemon" component={SelectedPokemon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
