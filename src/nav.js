
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/login';
import Index from './pages/station-index';
import purchaseContract from './pages/station-purchase-contract';
import Home from './pages/station-index-home';

const Stack = createNativeStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Index">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="purchaseContract" component={purchaseContract} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;