import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Home/HomeScreen';
import ScreenSplash from '../screenSplash/ScreenSplash';
import SelectedPokemon from '../selectedPokemon/SelectedPokemon';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenSplash" headerStyle={{}}>
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
        <Stack.Screen
          name="SelectedPokemon"
          component={SelectedPokemon}
          options={({route}) => ({title: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
