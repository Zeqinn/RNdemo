import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';
import Header from '../../components/header';

export default class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header></Header>
      </View>
    )
  }
}
