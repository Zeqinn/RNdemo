
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/login';
import Index from './pages/station-index';
import purchaseContract from './pages/station-purchase-contract';
import Home from './pages/station-index-home';
import purchaseContractSet from './pages/station-purchase-contract-set';

const Stack = createNativeStackNavigator();


function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="purchaseContractSet"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff'
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Index"
          component={Index}
          options={{
            title: '三一砼管家',
          }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="purchaseContract" component={purchaseContract} options={{ title: '采购合同管理' }} />
        <Stack.Screen name="purchaseContractSet" component={purchaseContractSet} options={{ title: '设定单价' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Nav;