import React, { Component } from 'react'
import { 
  View, 
  Text, 
  Image, 
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
 } from 'react-native';
import Header from '../../components/header';
import NavigationBar from '../../components/navBar';

export default class Home extends Component {
  constructor(props){
    super(props);
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
  onPress = () => {
    // this.props.navigation.navigate('purchaseContract');
  }
  renderDataItem(value,text){
    return (
      <View style={{
        width: '25%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>{value}</Text>
        <Text>{text}</Text>
      </View>
    )
  }
  renderIconItem(path,text,url){
    return (
      <TouchableOpacity style={{
        width: '25%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
      }}
        onPress={this.onPress()}
      >
        <Image 
          source={path}
          style={{width: 50, height: 50}} 
        />
        <Text>{text}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#f0f0f0'}}>
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
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#fff',
                flexWrap: 'wrap',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10
              }}>
                {this.renderDataItem('0.00','今日计划')}
                {this.renderDataItem('0.00','今日生产')}
                {this.renderDataItem('0.00','今日发货')}
                {this.renderDataItem('0.00','今日签收')}
                {this.renderDataItem('0.00','昨日生产')}
                {this.renderDataItem('0.00','本周生产')}
                {this.renderDataItem('0.00','本月发货')}
                {this.renderDataItem('0.00','本月签收')}
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <Text style={{
                paddingLeft: 16
              }}>常用工具</Text>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}>
                {this.renderIconItem(require('../../image/customer_mgr.png'), '客户管理')}
                {this.renderIconItem(require('../../image/constract_mgr.png'), '合同管理')}
                {this.renderIconItem(require('../../image/order_mgr.png'), '订单管理')}
                {this.renderIconItem(require('../../image/scheduling_center.png'), '调度中心')}
                {this.renderIconItem(require('../../image/mix_monitor.png'), '配合比')}
                {this.renderIconItem(require('../../image/equip_check.png'), '设备巡检')}
                {this.renderIconItem(require('../../image/quicktest.png'), '快速检测')}
                {this.renderIconItem(require('../../image/my_focus.png'), '我的关注')}
                {this.renderIconItem(require('../../image/purchaseContract.png'), '采购合同')}
                {this.renderIconItem(require('../../image/sign.png'), '打卡签到')}
                {this.renderIconItem()}
                {this.renderIconItem()}
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
  },
  bottomContainer: {
    marginVertical: 16,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingVertical: 16
  }
})
