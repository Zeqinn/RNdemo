import React, { Component } from 'react'
import { View, Text } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={{
        height: 40, 
        paddingHorizontal: 15, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}>
        <Text
          style={{fontSize: 17, color: '#6A6C67'}}
        >返回</Text>
        <Text
          style={{fontSize: 17, color: '#000000', fontWeight: 'bold'}}
        >导航栏</Text>
        <View><Text>?</Text></View>
      </View>
    )
  }
}
