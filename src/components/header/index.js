import React, { Component } from 'react'
import { View, Text } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={{
        height: 40, 
        paddingHorizontal: 15, 
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}>
        <View style={{width: 50}}>
          <Text style={{fontSize: 17, color: '#6A6C67', textAlign: 'left'}}>返回</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 17, color: '#000000', fontWeight: 'bold', textAlign: 'center'}}>导航栏</Text>
        </View>
        <View style={{width: 50}}>
          <Text style={{textAlign: 'right'}}>?</Text>
        </View>
        
      </View>
    )
  }
}
