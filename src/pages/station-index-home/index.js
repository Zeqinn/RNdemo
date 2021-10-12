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
// import NavigationBar from '../../components/navBar';
import userInfo from '../../util/userInfo';
import rest from '../../util/rest';
import util from '../../util/util';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataList: [
        {
          value: '0.00',
          text: '今日计划'
        },
        {
          value: '0.00',
          text: '今日生产'
        },
        {
          value: '0.00',
          text: '今日发货'
        },
        {
          value: '0.00',
          text: '今日签收'
        },
        {
          value: '0.00',
          text: '昨日生产'
        },
        {
          value: '0.00',
          text: '本周生产'
        },
        {
          value: '0.00',
          text: '本月发货'
        },
        {
          value: '0.00',
          text: '本月签收'
        },
      ],
      iconList: [
        {
          id: 1,
          path: require('../../image/customer_mgr.png'),
          text: '客户管理',
          url: ''
        },
        {
          id: 2,
          path: require('../../image/constract_mgr.png'),
          text: '合同管理',
          url: ''
        },
        {
          id: 3,
          path: require('../../image/order_mgr.png'),
          text: '订单管理',
          url: ''
        },
        {
          id: 4,
          path: require('../../image/scheduling_center.png'),
          text: '调度中心',
          url: ''
        },
        {
          id: 5,
          path: require('../../image/mix_monitor.png'),
          text: '配合比',
          url: ''
        },
        {
          id: 6,
          path: require('../../image/equip_check.png'),
          text: '设备巡检',
          url: ''
        },
        {
          id: 7,
          path: require('../../image/quicktest.png'),
          text: '快速检测',
          url: ''
        },
        {
          id: 8,
          path: require('../../image/my_focus.png'),
          text: '我的关注',
          url: ''
        },
        {
          id: 9,
          path: require('../../image/purchaseContract.png'),
          text: '采购合同',
          url: 'purchaseContract'
        },
        {
          id: 10,
          path: require('../../image/sign.png'),
          text: '打卡签到',
          url: ''
        },
        {},
        {}
      ],
      sum: '0.00',
      date: ''
    }
  }
  componentDidMount(){
    this.getHomeData();
    this.getDate();
  }
  getHomeData(){
    let {dataList} = this.state;
    rest.getHomeData({orgId: userInfo.org_id}).then(res => {
      if (res.code == 200) {
        let list = res.data;
        dataList[0].value = list.planToDayQuantity.toFixed(2);
        dataList[1].value = list.productToDayQuantity.toFixed(2);
        dataList[2].value = list.deliverToDayQuantity.toFixed(2);
        dataList[3].value = list.signToDayQuantity.toFixed(2);
        dataList[4].value = list.productYesterdayQuantity.toFixed(2);
        dataList[5].value = list.productWeekQuantity.toFixed(2);
        dataList[6].value = list.productMonthQuantity.toFixed(2);
        dataList[7].value = list.signMonthQuantity.toFixed(2);
      }
      this.setState({
        dataList,
        sum: res.data.productTotalQuantity.toFixed(2)
      })
    })
  }
  getDate(){
    let date = util.formatTime(new Date()).split(' ')[0];
    this.setState({
      date
    })
  }
  renderIconItem(id,path,text,url=''){
    return (
      <TouchableOpacity style={{
        width: '25%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
      }}
        onPress={() => {
          this.props.navigation.navigate(url);
        }}
        key={id}
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
    let {sum, dataList, iconList, date} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#f0f0f0'}}>
        {/* <NavigationBar title='三一砼管家'/> */}
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
                  <Text style={{fontSize: 12, color: '#fff'}}>{date}</Text>
                </View>
                <Text style={{
                  marginTop: 10,
                  fontSize: 28,
                  color: '#fff'
                }}>{sum}</Text>
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
                {dataList.map(i => {
                  return (
                    <View style={{
                      width: '25%',
                      height: 70,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                      <Text>{i.value}</Text>
                      <Text>{i.text}</Text>
                    </View>
                  )
                })}
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
                {iconList.map(i => {
                  return this.renderIconItem(i.id,i.path, i.text, i.url)
                })}
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
