import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Win from '../Screens/Win';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen name='Win' component={Win}  options={{headerShown: false}}/>
   </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
