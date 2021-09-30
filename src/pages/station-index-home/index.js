import React, { Component } from 'react'
import { 
  View, 
  Text, 
  Image, 
  ScrollView,
  StyleSheet,
  ImageBackground
 } from 'react-native';
import Header from '../../components/header';
import NavigationBar from '../../components/navBar';

export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      navTitle: {
        title: '三一砼管家',
        style: {
          color: '#000000',
          fontSize: 17,
          fontWeight: 'bold'
        }
      },
      topData: [
        {
          value: 0.00,
          text: '今日计划'
        },
        {
          value: 0.00,
          text: '今日生产'
        },
        {
          value: 0.00,
          text: '今日发货'
        },
        {
          value: 0.00,
          text: '今日签收'
        }
      ]
    }
  }
  renderDataItem(e){
    return (
      <View>
        <Text>{e.value}</Text>
        <Text>{e.text}</Text>
      </View>
    )
  }
  render() {
    const {} = this.state
    return (
      <View style={{flex: 1, backgroundColor: '#F7F8FA'}}>
        <NavigationBar
          title={this.state.navTitle}
        />
        <ScrollView style={{flex: 1}}>
          <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
              <ImageBackground
                source={require('../../image/sum_bg.png')}
                style={styles.imgBG}
                imageStyle={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
              >
                <View style={styles.flexCenter}>
                  <Text style={{fontSize: 16, color: '#fff'}}>产量汇总</Text>
                  <Text style={{fontSize: 12, color: '#fff'}}>2021-09-30</Text>
                </View>
                <Text style={{
                  marginTop: 10,
                  fontSize: 28,
                  color: '#fff'
                }}>279.00</Text>
                <Text style={{
                  marginTop: 8,
                  fontSize: 12,
                  color: '#FFDEDE'
                }}>累计总生产(方)</Text>
              </ImageBackground>
              <View>
                {/* {this.renderDataItem()} */}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16
  },
  topContainer: {
    
  },
  imgBG: {
    height: 120,
    padding: 16
  },
  flexCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
