import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Nav from './src/nav';
import { Provider } from '@ant-design/react-native';
class App extends Component {

  render() {
    return (
      <Provider>
        <View style={{flex: 1}}>
          <Nav></Nav>
        </View>
      </Provider>
    )
  }
}

export default App;
