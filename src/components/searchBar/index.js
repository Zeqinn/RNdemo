import React, { Component } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';


export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      timer: -1
    }
  }
  onChangeText(text) {
    this.setState({
      inputValue: text
    })
    clearTimeout(this.state.timer);
    this.state.timer = setTimeout(() => {
      this.props.input(this.state.inputValue);
    }, 1000);
  }
  render() {
    let {inputValue} = this.state;
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 44,
        paddingHorizontal: 16,
        borderColor: '#f0f0f0',
        borderWidth: 1
      }}>
        <Image 
          source={require('../../image/search.png')}
          style={{
            width: 16,
            height: 16,
            marginRight: 14
          }}
        />
        <TextInput
          placeholder='请输入合同编号'
          style={{flex: 1, fontSize: 16}}
          value={inputValue}
          onChangeText={text => this.onChangeText(text)}
          clearButtonMode='while-editing'
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#FE4B4A',
            width: 80,
            height: 32,
            borderRadius: 4,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 12
          }}
        >
          <Image
            source={require('../../image/plus_small.png')}
            style={{
              width: 14,
              height: 14
            }}
          />
          <Text
            style={{
              color: '#fff'
            }}
          >新建</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
