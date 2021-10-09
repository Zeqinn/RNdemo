import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavigationBar from '../../components/navBar';

export default class purchaseContract extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f0f0f0'}}>
        <NavigationBar
          title={{title: '采购合同管理'}}
        />
      </View>
    )
  }
}
