import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const UselessTextInput = (props) => {
  // const [value, onChangeText] = React.useState('');

  return (
    <TextInput
      onChangeText={text => onChangeText(text)}
      value='123'
      placeholder={props.txt}
      style={{flex: 1}}
      keyboardType={props.type}
      clearButtonMode="while-editing"
    />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
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
  render() {
    return (
     <>
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
        {/* <UselessTextInput txt='请输入手机号' type='phone-pad' /> */}
        <TextInput
          onChangeText={text => {
            this.setState({phone: text})
          }}
          value={this.state.phone}
          placeholder='请输入手机号'
          style={{flex: 1}}
          keyboardType='phone-pad'
          clearButtonMode="while-editing"
        />
      </View>
      <View style={styles.inputBox}>
        <Image
          style={styles.icon}
          source={require('../../image/password.png')}
        />
        <UselessTextInput txt='请输入密码' />
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
        <UselessTextInput txt='请输入动态验证码' />
      </View>
      <TouchableOpacity
          style={styles.button}
        >
          <Text
            style={{
              fontSize: 18,
              color: '#ffffff'
            }}
          >登录</Text>
        </TouchableOpacity>
      </>
    )
  }
}

export default Login;

