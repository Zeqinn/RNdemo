/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};
const UselessTextInput = (placeholder) => {
  const [value, onChangeText] = React.useState('placeholder');

  return (
    <TextInput
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder={placeholder}
    />
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: '#ffffff',
    flex: 1

  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '40%'
        }}>
        <Image
          style={styles.logo}
          source={require('./image/logo.png')}
        />
        <Text style={styles.title}>欢迎进入</Text>
        <Text style={styles.title}>三一数字云砼平台</Text>
      </View>
      
      <View style={styles.inputBox}>
        <Image 
          style={styles.icon}
          source={require('./image/username.png')}
        />
        <UselessTextInput style={{flex: 1}} placeholder={'请输入手机号'} />
      </View>
      <View style={styles.inputBox}>
        <Image 
          style={styles.icon}
          source={require('./image/password.png')}  
        />
        <UselessTextInput style={{flex: 1}} placeholder={'请输入密码'} />
        </View>
    </SafeAreaView>
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
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
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
  }
});

export default App;
