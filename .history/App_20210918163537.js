// import React, { Component } from 'react'
// import { View, Text } from 'react-native'
// import { Nav } from './src/nav';

// class App extends Component {

//   render() {
//     return (
//       <View style={{flex: 1}}>
//         <Nav></Nav>
//       </View>
//     )
//   }
// }



// export default App;

import  * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/login';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
