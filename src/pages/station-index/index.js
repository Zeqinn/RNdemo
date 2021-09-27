import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import { TabBar } from '@ant-design/react-native';
import Home from '../station-index-home';

class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'homeTab'
    }
  }
  onChangeTab(e){
    this.setState({
      selectedTab: e
    })
  }
  render() {
    return (
      <TabBar
        unselectedTintColor="#999796"
        tintColor="#FE4B4A"
        barTintColor="#ffffff"
      >
        <TabBar.Item
          title='首页'
          icon={
            <Image
              style={{width: 19.2, height: 20}}
              source={require('../../image/station_home.png')}
            />
          }
          selectedIcon={
            <Image
              style={{width: 19.2, height: 20}}
              source={require('../../image/station_home_select.png')}
            />
          }
          selected={this.state.selectedTab === 'homeTab'}
          onPress={() => {this.onChangeTab('homeTab')}}
        >
          <Home></Home>
        </TabBar.Item>
        <TabBar.Item
          title='审批'
          icon={
            <Image
              style={{width: 16, height: 19}}
              source={require('../../image/station_check.png')}
            />
          }
          selectedIcon={
            <Image
              style={{width: 16, height: 19}}
              source={require('../../image/station_check_select.png')}
            />
          }
          selected={this.state.selectedTab === 'approvalTab'}
          onPress={() => {this.onChangeTab('approvalTab')}}
        >
          <Text>审批内容</Text>
        </TabBar.Item>
        <TabBar.Item
          title='报表'
          icon={
            <Image
              style={{width: 20, height: 20}}
              source={require('../../image/station_report.png')}
            />
          }
          selectedIcon={
            <Image
              style={{width: 20, height: 20}}
              source={require('../../image/station_report_select.png')}
            />
          }
          selected={this.state.selectedTab === 'reportTab'}
          onPress={() => {this.onChangeTab('reportTab')}}
        >
          <Text>报表内容</Text>
        </TabBar.Item>
        <TabBar.Item
          title='我的'
          icon={
            <Image
              style={{width: 18, height: 20}}
              source={require('../../image/station_mine.png')}
            />
          }
          selectedIcon={
            <Image
              style={{width: 18, height: 20}}
              source={require('../../image/station_mine_select.png')}
            />
          }
          selected={this.state.selectedTab === 'mineTab'}
          onPress={() => {this.onChangeTab('mineTab')}}
        >
          <Text>我的内容</Text>
        </TabBar.Item>
      </TabBar>
    )
  }
}
export default Index;