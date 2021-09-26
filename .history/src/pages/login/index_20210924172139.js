import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import Button from '@ant-design/react-native/lib/button';
// import Provider from '@ant-design/react-native/lib/provider';
// import Toast from '@ant-design/react-native/lib/toast';
import { Toast } from '@ant-design/react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#333333',
    textAlign: 'center'
  },
  inputBox: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E3E3E3',
    marginBottom: 10
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20
  },
  icon: {
    margin: 10,
    width: 20,
    height: 20
  },
  button: {
    marginTop: 30,
    marginHorizontal: 15,
    backgroundColor: '#FF4F4F',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    height: 48
  }
});

class Login extends Component {
  constructor(){
    super();
    this.state = {
      phone: '',
      password: '',
      code: ''
    }
  }
  
  onPress = () => {
    if(this.state.phone == '') {
      Toast.info('请输入手机号')
      return;
    }
    if(this.state.password == '') {
      Toast.info('请输入密码')
      return;
    }
    if(this.state.code == '') {
      Toast.info('请输入验证码')
      return;
    }
  }

  render() {
    return (
     <Provider>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 240
        }}>
        <Image
          style={styles.logo}
          source={require('../../image/logo.png')}
        />
        <Text style={styles.title}>欢迎进入</Text>
        <Text style={styles.title}>三一数字云砼平台</Text>
      </View>
      <View style={styles.inputBox}>
        <Image
          style={styles.icon}
          source={require('../../image/username.png')}
        />
        <TextInput
          onChangeText={text => {
            this.setState({phone: text})
          }}
          value={this.state.phone}
          placeholder='请输入手机号'
          style={{flex: 1}}
          keyboardType='phone-pad'
          clearButtonMode='while-editing'
        />
      </View>
      <View style={styles.inputBox}>
        <Image
          style={styles.icon}
          source={require('../../image/password.png')}
        />
        <TextInput
          onChangeText={text => {
            this.setState({password: text})
          }}
          value={this.state.password}
          placeholder='请输入密码'
          style={{flex: 1}}
          clearButtonMode="while-editing"
          secureTextEntry={true}
        />
        <Image
          style={styles.icon}
          source={require('../../image/login_show.png')}
        />
      </View>
      <View style={styles.inputBox}>
        <Image
          style={styles.icon}
          source={require('../../image/login_code.png')}
        />
        <TextInput
          onChangeText={text => {
            this.setState({code: text})
          }}
          value={this.state.code}
          placeholder='请输入验证码'
          style={{flex: 1}}
          clearButtonMode="while-editing"
          returnKeyType='go'
        />
      </View>
      <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
          <Text
            style={{
              fontSize: 18,
              color: '#ffffff'
            }}
          >登录</Text>
        </TouchableOpacity>
      </Provider>
    )
  }
}

export default Login;

